/********************************
 * Taobao Uploader Script
 *
 * created by yubo 2009-03-18
 ********************************/

var TB = TB || {};
TB.Uploader = function() {
    var Y = YAHOO.util, Dom = Y.Dom, Event = Y.Event, Lang = YAHOO.lang;
    var debug = (YAHOO.env.ua.gecko && window.console) ? console.log : function(){}; // 调试器

    var defConfig = {
        swfUrl: 'uploader.swf',
        container: null,
        buttonSkin: '',
        forceTransparent: false,
        allowMultipleFiles: true, // 允许多文件上传
        fileFilters: [{description: '所有文件 (*.*)', extensions: '*.*'}],
        uploadForm: 'J_UploadForm', // 相关联的上传form，从中获取action, method
        uploadList: 'J_UploadList', // 上传文件的列表，里面采用tmpl约定
        uploadBtn: 'J_UploadAll'
        /* 下面这些参数都约定放在uploadForm的相关input元素里，
         * 好处是界面上有改变时，更新机制简单，无需通过事件来实现
         * 坏处是，需要与html结构增加约定的钩子
        uploadScriptPath: 'uploader.php', // [取uploadForm的action]
        uploadMethod: 'POST', // [取uploadForm的method]
        fileSizeLimit: 2, // 上传单个文件的大小限制，单位为M [取uploadForm.fileSizeLimit]
        uploadTimeout： 60, // 单个文件的上传时间不能超过60s [取uploadForm.uploadTimeout]
        needValidate: true, // 是否需要校验文件尺寸和大小等 [取uploadForm.needValidate]
        batchPublish: false // 是否批量发布 [取uploadForm.batchPublish]
        */
    };

    /**
     * TPS Uploader
     * 拥有的属性列表为：
     *  this.config
     *  this.uploadForm
     *  this.uploadList
     *  this.selectBtn - 选择文件按钮
     *  this._uploader - YUI Uploader
     *  this.fileList - _uploader内部的文件列表
     *  this.totalFilesSize
     *  this.totalFilesNum
     *  this.uploadedFilesNum - 已经上传的文件（包括成功的和失败的）
     *  this.uploadFailedNum - 上传失败的文件数
     *  this.needValidate - 是否需要校验 默认true
     *  this.batchPublish - 是否批量发布 默认true
     */
    var Uploader = function(config) {
        this.config = Lang.merge(defConfig, config || {});
        init.call(this);
    };
    Lang.augmentProto(Uploader, Y.EventProvider);

    function init() {
        var cfg = this.config;

        // create YAHOO.widget.Uploader
        YAHOO.widget.Uploader.SWFURL = cfg.swfUrl;
        this._uploader = new YAHOO.widget.Uploader(cfg.container, cfg.buttonSkin, cfg.forceTransparent);

        // init uploadList and uploadForm etc.
        this.uploadList = Dom.get(cfg.uploadList);
        this.uploadForm = Dom.get(cfg.uploadForm);
        Event.on(this.uploadForm, 'submit', function(ev) {
            Event.preventDefault(ev);
            this.uploadAll();
        }, this, true);
        this.uploadBtn = Dom.get(cfg.uploadBtn);
        this.selectBtn = Dom.get(cfg.container);
        this.uploadTimeout = this.uploadForm['uploadTimeout'].value || 60; // 默认60s

        // init form checkboxs
        var nvCheckbox = this.uploadForm['needValidate'];
        Event.on(nvCheckbox, 'click', function() {
            for(var fileId in this.fileList) {
                this.validateItem(fileId);
            }
            this.fireEvent('fileListChange');
        }, this, true);

        var bpCheckbox = this.uploadForm['batchPublish'];
        Event.on(bpCheckbox, 'click', function() {
            this.batchPublish = bpCheckbox.checked;
        }, this, true);
        this.batchPublish = bpCheckbox.checked; // init

        // init events
        this._uploader.addListener('contentReady', function() {
            this.setAllowMultipleFiles(cfg.allowMultipleFiles);
            this.setFileFilters(cfg.fileFilters);
        });
        this._uploader.addListener('fileSelect', function(ev) {
            this.fileList = ev.fileList;
            this.onFileSelect(ev.fileList);
        }, this, true);
        this._uploader.addListener('uploadStart', function(ev) {
            this.onUploadStart(ev.id);
        }, this, true);
        this._uploader.addListener('uploadProgress', function(ev) {
            this.onUploadProgress(ev.id, ev.bytesLoaded, ev.bytesTotal);
        }, this, true);
        this._uploader.addListener('uploadCompleteData', function(ev) {
            this.onUploadComplete(ev.id, ev.data);
        }, this, true);
        this._uploader.addListener('uploadError', function(ev) {
            this.onUploadError(ev.id, ev.status);
        }, this, true);
        this._uploader.addListener('uploadCancel', function(ev) {
            this.onUploadCancel(ev.id);
        }, this, true);

        // add events
        this.createEvent('fileListChange');
        this.createEvent('uploadCompleteAll');
    }

    Lang.augmentObject(Uploader.prototype, {
        /**
         * 上传所有文件
         */
        uploadAll: function() {
            // reset
            this.uploadedFilesNum = 0;
            this.uploadFailedNum = 0;

            // 移除未通过客户端校验的文件
            var badItems = Dom.getElementsByClassName('warning', 'li', this.uploadList);
            for(var i = 0, len = badItems.length; i < len; ++i) {
                this.removeFile(badItems[i].id);
            }

            // 当文件数小于并发数时，解决YUI Uploader会报错的bug
            this._uploader.setSimUploadLimit(this.totalFilesNum < 5 ? this.totalFilesNum : 5);

            // 获取uploadScriptPath
            var uploadScriptPath = this.uploadForm.action;
            var method = this.uploadForm.getAttribute('method') || 'POST';
            this.batchPublishId = this.batchPublish ? new Date().getTime() : 0;
            var vars = {
              'needValidate': this.needValidate,
              'batchPublishId': this.batchPublishId // 为0表示不需要批量发布
            };
            debug(Lang.dump(vars));
            
            this._uploader.uploadAll(uploadScriptPath, method, vars);

            // 禁用删除等可操作按钮
            Dom.addClass(this.uploadForm, 'ui-disabled');
            if(this.uploadForm['needValidate']) {
                this.uploadForm['needValidate'].setAttribute('disabled', 'disabled');
            }
            if(this.uploadForm['batchPublish']) {
                this.uploadForm['batchPublish'].setAttribute('disabled', 'disabled');
            }
            this._uploader.disable();
            this.setUploadBtnStatus(false);
        },

        /**
         * 选择文件时触发的事件
         */
        onFileSelect: function(fileList) {
            var tmplItem = Dom.get('tmpl-upload-item');
            debug('onFileSelect: fileList = ' + Lang.dump(fileList));

            var len = this._getTotalFilesNum();
            for (var i = 0; i < len; ++i) { // 保证按顺序排列，否则选取多个文件时，顺序是乱的
                var file = fileList['file' + i];
                if (Dom.get(file.id)) continue; // 已经添加过

                var html = tmplItem.innerHTML.replace('%filename', file.name);
                html = html.replace('%filesize', this._getFileSize(file.size));

                var newItem = tmplItem.cloneNode(false);
                newItem.id = file.id;
                newItem.innerHTML = html;

                // 添加删除按钮的事件
                (function(uploader, newItem) {
                    var removeBtn = Dom.getElementsByClassName('J_RemoveFile', 'a', newItem)[0];
                    Event.on(removeBtn, 'click', function(ev) {
                        Event.preventDefault(ev);
                        uploader.removeFile(Dom.getAncestorByTagName(this, 'li').id);
                    });
                })(this, newItem);

                // 添加并校验
                this.uploadList.appendChild(newItem);
                this.validateItem(file.id);
            }
            this.onFileListChange();
        },

        /**
         * 文件列表发生改变时触发
         */
        onFileListChange: function() {
            this.totalFilesSize = this._getTotalFilesSize();
            this.totalFilesNum = this._getTotalFilesNum();
            this.fireEvent('fileListChange');
        },

        /**
         * 文件开始上传时触发的事件
         */
        onUploadStart: function(fileId) {
            debug('upload started');
            Dom.setAttribute(Dom.get(fileId), 'class', 'processing');

            // 设置timeout定时器
            Lang.later(this.uploadTimeout * 1000, this, function() {
               if(this.isOnUploading(fileId)) {
                   this._uploader.cancel(fileId);
                   this.onUploadCancel(fileId);
               }
            });
        },

        /**
         * 文件上传过程中触发的事件
         */
        onUploadProgress: function(fileId, bytesLoaded, bytesTotal) {
            debug('on processing');
            var el = Dom.get(fileId);
            
            var percent = bytesLoaded / bytesTotal;
            var x = -795 + Math.round(340 * percent); /* -795 和css中的初始值保持一致  */
            Dom.setStyle(el, 'background-position', x + 'px 0');
        },

        /**
         * 文件上传完成时触发的事件
         */
        onUploadComplete: function(fileId, responseData) {
            debug('upload complete. responseData is ' + responseData);
            var el = Dom.get(fileId);

            // 去掉进度条
            Dom.removeClass(el, 'processing');
            Dom.setStyle(el, 'background-position', '');

            if(!Lang.JSON.isValid(responseData)) {
                this.showResponse(fileId, {result: '0', msg: '服务器返回的信息不是有效的JSON格式：\n\n' + responseData});
            } else {
                this.showResponse(fileId, Lang.JSON.parse(responseData));
            }
            this.checkUploadAll();
        },

        /**
         * 文件上传时发生了错误
         * 备注：最简单的测试是，将uploader.php改个名，引发404错误
         */
        onUploadError: function(fileId, status) {
            debug('error occurs. status message: ' + status);
            this.showResponse(fileId, {result: '0', msg: status});
            this.checkUploadAll();
        },

        /**
         * 文件上传过程中被取消
         */
        onUploadCancel: function(fileId) {
            this.onUploadError(fileId, '上传时间超时，不能超过 ' + this.uploadTimeout + 's');
        },

        /**
         * 检查文件是否已经全部上传
         */
        checkUploadAll: function() {
            this.uploadedFilesNum++;
            if (this.uploadedFilesNum == this.totalFilesNum) {
                if(!this.batchPublish) { // 非批量发布，直接显示结果
                    this.fireEvent('uploadCompleteAll');
                } else {
                   this.sendPublishRequest();
                }
            }
        },

        /**
         * 发送批量发布请求
         */
        sendPublishRequest: function() {
            // 到这一步时，所有单个文件肯定都已经处理了，包括超时等各种因素引起的错误
            // 下面只要检查是否都处于“等待发布”状态，并做相应处理
            var isAllOk = Dom.getElementsByClassName('wait-to-publish', 'li', this.uploadList).length == this.totalFilesNum;
            debug('sendPublishRequest: isAllOk = ' + isAllOk);
            if(isAllOk) {
                // 发送批量发布请求
                var postData = 'batchPublishId=' + this.batchPublishId + '&fileServeIds=';
                var listItems = Dom.getChildren(this.uploadList);
                for(var i = 1, len = listItems.length; i < len; ++i) { // 从1开始，排除tmplItem
                    postData += listItems[i].getAttribute('serveId');
                    if(i != len - 1) {
                        postData += ',';
                    }
                }
                debug('postData' + postData); // "batchPublishId=456764575&fileServeIds=3543646,4576586,458658"

                var callback = {
                    success: function(o) {
                        var thisObj = o.argument;
                        debug('o.responseText: ' + o.responseText);
                        var results = Lang.JSON.parse(o.responseText);

                        if (results['result'] == '4') { // 4 表示发布过程中出错了
                            showPublishErrors(thisObj, results['msg']);
                        } else {
                            // 更新uploadList
                            for (var serveId in results) { // 显示url
                                var fileItem = thisObj.getFileItemByServeId(serveId);
                                thisObj.showResponse(fileItem, {'result': '1', 'msg': results[serveId]});
                            }
                        }

                        // 更新界面
                        thisObj.fireEvent('uploadCompleteAll');

                    },
                    /**
                     * 失败时的处理事件，比如404错误
                     */
                    failure: function(o) {
                        debug('o.responseText: ' + o.responseText);
                        showPublishErrors(o.argument, '发布时出问题了');
                        this.fireEvent('uploadCompleteAll');

                    },
                    argument: this // 将当前this传进去
                };

                debug(this.uploadForm['publishUrl'].value);
                Y.Connect.asyncRequest('POST', this.uploadForm['publishUrl'].value, callback, postData);
                
            } else { // 说明有校验等错误，直接显示出错结果即可
                this.fireEvent('uploadCompleteAll');
            }

            /**
             * 显示发布过程中引起的错误
             */
            function showPublishErrors(thisObj, msg) {
                // 显示出错提示
                var listItems = Dom.getChildren(thisObj.uploadList);
                for (var i = 1, len = listItems.length; i < len; ++i) {
                    thisObj.showResponse(listItems[i], {'result': '4', 'msg': msg});
                }
                thisObj.uploadFailedNum = thisObj.totalFilesNum; // 一错百错逻辑
            }
        },

        /**
         * 客户端校验
         */
        validateItem: function(fileId) {
            var checkbox = this.uploadForm['needValidate'];
            this.needValidate = checkbox ? checkbox.checked : true; // 默认是检查的
            if (this.needValidate) {
                // 客户端的简单校验
                var fileSizeLimit = ((this.uploadForm['fileSizeLimit'] || 0).value) || 2; // 默认2M

                if (this.fileList[fileId].size > 1024 * 1024 * fileSizeLimit) {
                    this.showResponse(fileId, {result: '2', msg: '文件大小不能超过' + fileSizeLimit + 'M，请从列表中移除。'});
                }
            } else {
                this.showResponse(fileId, {result: '', msg: ''});
                Dom.setAttribute(Dom.get(fileId), 'class', 'default');
            }
        },

        /**
         * 设置上传按钮的状态
         * @param enable 是否处于可用状态
         */
        setUploadBtnStatus: function(enable) {
            if (enable) {
                Dom.removeClass(this.uploadBtn, 'disabled');
                this.uploadBtn.removeAttribute('disabled');
            } else {
                Dom.addClass(this.uploadBtn, 'disabled');
                this.uploadBtn.setAttribute('disabled', 'disabled');
            }
        },

        /**
         * 显示响应信息
         * result:
         *  0 - 文件上传失败
         *  1 - 文件上传成功
         *  2 - 本地或服务器校验失败
         *  3 - 上传已成功，等待发布中
         *  4 - 发布失败
         */
        showResponse: function(fileId, response) {
            var fileItem = Dom.get(fileId);
            if(!fileItem) {
                debug('fileId: ' + fileId + ' 不存在');
                return;
            }
            debug('response: ' + Lang.dump(response));

            var resultCode = response['result'];
            var resultMsg = response['msg'];
            var msgClass = '';
            switch(resultCode) {
                case '0': msgClass = 'error'; break;
                case '1': msgClass = 'ok'; break;
                case '2': msgClass = 'warning'; break;
                case '3': msgClass = 'wait-to-publish'; break;
                case '4': msgClass = 'error'; break; // 视觉上和error一样
            }
            Dom.setAttribute(fileItem, 'class', msgClass);

            var msgEl = Dom.getElementsByClassName('msg', '*', fileId)[0];
            if(msgEl) {
                if(resultMsg.indexOf('http') == 0) { // 返回的是URL
                    resultMsg = '<input type="text" class="url" onclick="javascript: this.select()" value="' + resultMsg + '" />';
                }
                msgEl.innerHTML = resultMsg;
            }

            if(resultCode == 2 || resultCode == 0) {
                this.uploadFailedNum++;
            };

            if(this.batchPublish && typeof response['fileServeId'] != 'undefined') {
                fileItem.setAttribute('serveId', response['fileServeId']); // 保存服务端对应的fileServeId
            }
        },

        /**
         * 移除文件
         */
        removeFile: function(fileId) {
            this._uploader.removeFile(fileId);
            delete this.fileList[fileId];
            this.uploadList.removeChild(Dom.get(fileId));
           
            this.onFileListChange();
        },

        /**
         * 状态重置
         */
        reset: function() {
            // reset fileList
            for(var fileId in this.fileList) {
                this.uploadList.removeChild(Dom.get(fileId));
            }
            this.fileList = null;
            this.totalFilesNum = 0;
            this.totalFilesSize = 0;
            this.fireEvent('fileListChange');

            // 激活删除等可操作按钮
            Dom.removeClass(this.uploadForm, 'ui-disabled');
            if(this.uploadForm['needValidate']) {
                this.uploadForm['needValidate'].removeAttribute('disabled');
            }
            if(this.uploadForm['batchPublish']) {
                this.uploadForm['batchPublish'].removeAttribute('disabled');
            }

            // ie下需要这一句，其它浏览器这一句会导致出错
            if(YAHOO.env.ua.ie) {
                this._uploader.clearFileList();
                this._uploader.enable();
            }
        },

        /**
         * 检查某个文件是否还在上传
         * @param fileId
         */
        isOnUploading: function(fileId) {
            return Dom.hasClass(fileId, 'processing');
        },

        /**
         * 根据serveId找到对应的list item
         * @param serveId
         */
        getFileItemByServeId: function(serveId) {
            var listItems = Dom.getChildren(this.uploadList);
            for(var i = 1, len = listItems.length; i < len; ++i) { // 忽略tmplItem
                if(listItems[i].getAttribute('serveId') == serveId) {
                    return listItems[i];
                }
            }
            return null;
        },

        /**
         * 获取友好显示的文件尺寸
         */
        _getFileSize: function(size) {
            if (size < 1024) return size + ' B';

            size = size / 1024;
            if (size < 1024) {
                return size.toFixed(1) + ' KB';
            }

            return (size / 1024).toFixed(1) + ' MB';
        },

        /**
         * 获取友好显示总文件大小
         */
        _getTotalFilesSize: function() {
            var totalSize = 0;
            for(var fileId in this.fileList) {
                totalSize += this.fileList[fileId].size;
            }
            return this._getFileSize(totalSize);
        },

        /**
         * 获取文件数目
         */
        _getTotalFilesNum: function() {
            var num = 0;
            for(var fileId in this.fileList) {
                if(this.fileList[fileId]) {
                    num++;
                }
            }
            return num;
        }
    });

    return Uploader;
}();


YAHOO.util.Event.onDOMReady(function() {
    var Y = YAHOO.util, Dom = Y.Dom, Event = Y.Event;

    var uploader = new TB.Uploader({
        swfUrl: TB.Uploader.assetsConfig.swfUrl,
        container: 'J_UploadFlashBox',
        buttonSkin: TB.Uploader.assetsConfig.buttonSkin,
        allowMultipleFiles: true,
        fileFilters: [
            //{description: '所有文件 (*.*)', extensions: '*.*'},
            {description: '图片或Flash文件 (*.JPG;*.PNG;*.GIF;*.SWF)', extensions: '*.jpg;*.png;*.gif;*.swf'}
        ]
    });

    // 文件列表发生改变时的事件
    var totalFilesSizeEl = Dom.get('J_TotalFilesSize');
    var totalFilesNumEl = Dom.get('J_TotalFilesNum');
    uploader.subscribe('fileListChange', function() {
        // 1. 更新统计信息
        totalFilesSizeEl.innerHTML = this.totalFilesSize || '0 B';
        totalFilesNumEl.innerHTML = this.totalFilesNum || 0;

        // 2. 更新上传按钮的状态
        // 直接根据list的状态来判断，简单鲁棒，只取default状态的li，并且要减掉tmplItem
        var isOk = Dom.getElementsByClassName('default', 'li', this.uploadList).length - 1 > 0;
        this.setUploadBtnStatus(isOk);
    });

    // 文件全部上传完成时的事件
    var uploadControls = Dom.getElementsByClassName('upload-controls', 'div', 'J_UploadForm')[0];
    var uploadResult = Dom.getElementsByClassName('upload-result', 'div', 'J_UploadForm')[0];
    uploader.subscribe('uploadCompleteAll', function() {
        // 隐藏添加文件按钮
        Dom.setStyle(this.selectBtn.parentNode, 'display', 'none');

        // 隐藏控制表单元素
        Dom.addClass(uploadControls, 'hidden');

        // 显示总的成功或错误信息
        Dom.removeClass(uploadResult, 'hidden');
        if(this.uploadFailedNum) {
            Dom.get('J_UploadFailedNum').innerHTML = this.uploadFailedNum;
            Dom.addClass(uploadResult, 'error-result');
        } else {
            Dom.addClass(uploadResult, 'ok-result');
        }
    });

    // reset按钮
    Dom.getElementsByClassName('J_ResetUpload', 'a', uploadResult, function(each) {
        Event.on(each, 'click', function(ev) {
            Event.preventDefault(ev);

            // reset uploader
            uploader.reset();

            // 显示添加文件按钮
            Dom.setStyle(uploader.selectBtn.parentNode, 'display', '');

            // 显示控制表单元素
            Dom.removeClass(uploadControls, 'hidden');

            // 隐藏总的成功或错误信息
            Dom.removeClass(uploadResult, 'ok-result');
            Dom.removeClass(uploadResult, 'error-result');
            Dom.addClass(uploadResult, 'hidden');
        });
    });

});
