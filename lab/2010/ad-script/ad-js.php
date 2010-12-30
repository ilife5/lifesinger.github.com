(function() {
    g_alimama_ad = {
        render: function() {
            var scripts = getElementsByClassName('alimama-ad-hook', 'script', document),
                len = scripts.length, i,
                pid, hook, hooks = {}, ad, ads = [];
            console.log('len = ' + len);

            for(i = 0; i < len; i++) {
                hook = scripts[i];
                pid = hook.getAttribute('data-pid');
                if(pid) {
                    hooks[pid] = hook;
                }
            }

            // 根据 pid, type 等参数，从服务器动态获取广告代码
            <?php
                /* 动态代码 */
                //sleep(2); // simulate delay
            ?>

            // 下面仅是模拟，写死数据
            ads["mm_1"] = '<img src="http://img.alimama.cn/bcrm/adboard/picture/2010-03-02/100302152555.jpg">';
            ads["mm_2"] = '<img src="http://img05.taobaocdn.com/tps/i5/T1AKluXk8EXXXXXXXX-470-150.jpg">';
            ads["mm_3"] = '<img src="http://img08.taobaocdn.com/tps/i8/T1BuFuXlVvXXXXXXXX-470-150.jpg">';
            ads["mm_4"] = '<img src="http://img.alimama.cn/bcrm/adboard/picture/2010-03-03/100303122330.gif">';
            ads["mm_5"] = '<div style="height: 50px; border: 1px solid red">I am text Ad.</div>';

            for(pid in hooks) {
                if(ads[pid]) {
                    ad = document.createElement('div');
                    ad.innerHTML = ads[pid];
                    hook = hooks[pid];
                    hook.parentNode.replaceChild(ad, hook);
                }
            }
        }
    };

    // getElementsByClassName
    function getElementsByClassName(cls, tag, context) {
        var els = context.getElementsByClassName(cls),
            ret = els, i = 0, j = 0, len = els.length, el;

        if (tag && tag !== '*') {
            ret = [];
            tag = tag.toUpperCase();
            for (; i < len; ++i) {
                el = els[i];
                if (el.tagName === tag) {
                    ret[j++] = el;
                }
            }
        }
        return ret;
    }
    if (!document.getElementsByClassName) {
        // 降级使用 querySelectorAll
        if (document.querySelectorAll) {
            getElementsByClassName = function(cls, tag, context) {
                return context.querySelectorAll((tag ? tag : '') + '.' + cls);
            }
        }
        // 降级到普通方法
        else {
            getElementsByClassName = function(cls, tag, context) {
                var els = context.getElementsByTagName(tag || '*'),
                    ret = [], i = 0, j = 0, len = els.length, el, t,
                    SPACE = ' ';

                cls = SPACE + cls + SPACE;
                for (; i < len; ++i) {
                    el = els[i];
                    t = el.className;
                    if (t && (SPACE + t + SPACE).indexOf(cls) > -1) {
                        ret[j++] = el;
                    }
                }
                return ret;
            }
        }
    }

    // go
    g_alimama_ad.render();
    console.log('render loaded');

})();