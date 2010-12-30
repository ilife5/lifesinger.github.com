<!doctype html>
<html>
<head>
<meta charset="gbk"/>
<title>Ad Test</title>
<script>
    // no error in ie7-
    if(typeof console === 'undefined') {
        console = { log: function() {} };
    }
</script>
</head>
<body>
<p>line 1</p>
<script class="alimama-ad-hook" data-pid="mm_1">
    (function(d, s, g) {
        if (!d.getElementById(s)) {
            var a = d.createElement('script');
            a.id = s; a.async = true; a.src = 'ad-js.php';
            d.getElementsByTagName('head')[0].appendChild(a);
        } else if (g && g.render) {
            g.render();
            console.log('1');
        }
    })(document, 'alimama-ad-script', window['g_alimama_ad']);
</script>
<p>line 2</p>
<p>line 3</p>
<script class="alimama-ad-hook" data-pid="mm_2">
    (function(d, s, g) {
        if (!d.getElementById(s)) {
            var a = d.createElement('script');
            a.id = s; a.async = true; a.src = 'ad-js.php';
            d.getElementsByTagName('head')[0].appendChild(a);
        } else if (g && g.render) {
            g.render();
            console.log('2');
        }
    })(document, 'alimama-ad-script', window['g_alimama_ad']);
</script>
<p>line 4</p>

<?php
flush();
// simulate delay
sleep(2);
?>

<p>line 5</p>

<script class="alimama-ad-hook" data-pid="mm_3">
    (function(d, s, g) {
        if (!d.getElementById(s)) {
            var a = d.createElement('script');
            a.id = s; a.async = true; a.src = 'ad-js.php';
            d.getElementsByTagName('head')[0].appendChild(a);
        } else if (g && g.render) {
            g.render();
            console.log('3');
        }
    })(document, 'alimama-ad-script', window['g_alimama_ad']);
</script>
<p>line 6</p>
<p>line 7</p>
<script class="alimama-ad-hook" data-pid="mm_4">
    (function(d, s, g) {
        if (!d.getElementById(s)) {
            var a = d.createElement('script');
            a.id = s; a.async = true; a.src = 'ad-js.php';
            d.getElementsByTagName('head')[0].appendChild(a);
        } else if (g && g.render) {
            g.render();
            console.log('4');
        }
    })(document, 'alimama-ad-script', window['g_alimama_ad']);
</script>
<p>line 8</p>
<script class="alimama-ad-hook" data-pid="mm_5">
    (function(d, s, g) {
        if (!d.getElementById(s)) {
            var a = d.createElement('script');
            a.id = s; a.async = true; a.src = 'ad-js.php';
            d.getElementsByTagName('head')[0].appendChild(a);
        } else if (g && g.render) {
            g.render();
            console.log('5');
        }
    })(document, 'alimama-ad-script', window['g_alimama_ad']);
</script>
</body>
</html>
