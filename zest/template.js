/**
 * 该文件的简要性功能说明，可以一行，也可以
 * 多行。要求文字简洁明确。
 *
 * @creator     玉伯<yubo@taobao.com>
 * @depends     yahoo-dom-event
 * @changelog
 *      ver 1.0 @2009-09-01 玉伯： 初始版本
 *      ver 1.1 @2009-12-22 小马： 有重大变动时，才添加 changelog
 *      ver 2.0 @2010-02-12 圆心： 小修小改，不需要添加
 *      ver 2.1 @2010-05-21 沉鱼： 重大变动和小修小改的判断依据是：增加或修改的代码行数是否大于 100
 */

var TB = window.TB || {};

// 下面是静态工具类的典型写法
TB.SomeUtil = (function() {
    var Y = YAHOO.util, Dom = Y.Dom, Event = Y.Event, Lang = YAHOO.lang;

    /**
     * privateFn 的描述
     * @param {string} arg1 arg1 的描述
     * @param {number} arg2 arg2 的描述
     */
    function privateFn(arg1, arg2) {
        // code
    }

    // public api
    return {

        /**
         * someFn 的描述
         */
        someFn: function() {

        }
    };
})();









// 下面是组件类的典型写法
(function() {
    var Y = YAHOO.util, Dom = Y.Dom, Event = Y.Event, Lang = YAHOO.lang;

    /**
     * privateFn 的描述
     * @param {string} arg1 arg1 的描述
     * @param {number} arg2 arg2 的描述
     */
    function privateFn(arg1, arg2) {
        // code
    }

    // public api
    return {

        /**
         * someFn 的描述
         */
        someFn: function() {

        }
    };
})();
