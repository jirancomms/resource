<!-- Global site tag (gtag.js) - Google Analytics -->
(function() {
    function async_load(){
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=UA-153692469-1';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }
    window.attachEvent ? window.attachEvent('onload', async_load) : window.addEventListener('load', async_load, false);
})();

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-153692469-1');
