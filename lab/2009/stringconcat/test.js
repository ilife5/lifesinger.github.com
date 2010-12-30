
// 方式A：直接采用多行写法
var a = '\
&lt;div class="kissy-toolbar-button" title="{TITLE}"&gt;\
    &lt;div class="kissy-toolbar-button-outer-box"&gt;\
        &lt;div class="kissy-toolbar-button-inner-box"&gt;\
            &lt;span class="kissy-toolbar-{NAME}"&gt;{TEXT}&lt;/span&gt;\
        &lt;/div&gt;\
    &lt;/div&gt;\
&lt;/div&gt;';

// 方式B：用+号
var b = '&lt;div class="kissy-toolbar-button" title="{TITLE}"&gt;' +
            '&lt;div class="kissy-toolbar-button-outer-box"&gt;' +
                '&lt;div class="kissy-toolbar-button-inner-box"&gt;' +
                    '&lt;span class="kissy-toolbar-{NAME}"&gt;{TEXT}&lt;/span&gt;' +
                '&lt;/div&gt;' +
            '&lt;/div&gt;' +
        '&lt;/div&gt;';

// 方式C：用数组join
var c = ['&lt;div class="kissy-toolbar-button" title="{TITLE}"&gt;',
             '&lt;div class="kissy-toolbar-button-outer-box"&gt;',
                 '&lt;div class="kissy-toolbar-button-inner-box"&gt;',
                     '&lt;span class="kissy-toolbar-{NAME}"&gt;{TEXT}&lt;/span&gt;',
                 '&lt;/div&gt;',
             '&lt;/div&gt;',
         '&lt;/div&gt;'].join('');
