var SnsDropdownApp = /** @class */ (function () {
    function SnsDropdownApp(snsDataSet) {
        if (snsDataSet === void 0) { snsDataSet = {}; }
        this.snsDataList = [
            {
                snsName: 'facebook',
                snsTitle: '페이스북',
                snsImg: '//update.coolmessenger.com/_ImageServer/cooledu/icon_facebook.png'
            },
            {
                snsName: 'twitter',
                snsTitle: '트위터',
                snsImg: '//update.coolmessenger.com/_ImageServer/cooledu/icon_twitter.png'
            },
            {
                snsName: 'blog',
                snsTitle: '네이버 블로그',
                snsImg: '//update.coolmessenger.com/_ImageServer/cooledu/icon_blog.png'
            },
            {
                snsName: 'band',
                snsTitle: '네이버 밴드',
                snsImg: '//update.coolmessenger.com/_ImageServer/cooledu/icon_band.jpg'
            },
        ];
        this.snsImg = '';
        this.snsTitle = '';
        this.serviceName = '';
        // 추가한 sns data가 있을 때
        if (snsDataSet.snsData)
            this.snsDataList.push(snsDataSet.snsData);
        this.snsImg = snsDataSet.snsImg ? snsDataSet.snsImg : '//update.coolmessenger.com//_ImageServer/coolschool/facebook_link.png';
        this.snsTitle = snsDataSet.snsTitle ? snsDataSet.snsTitle : '교육콘텐츠 제공 통합플랫폼';
        this.serviceName = snsDataSet.serviceName ? snsDataSet.serviceName : 'coolschool';
        // include dot.js
        // @ts-ignore
        !function () {
            "use strict";
            var u, d = { name: "doT", version: "1.1.1", templateSettings: { evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g, interpolate: /\{\{=([\s\S]+?)\}\}/g, encode: /\{\{!([\s\S]+?)\}\}/g, use: /\{\{#([\s\S]+?)\}\}/g, useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g, define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g, defineParams: /^\s*([\w$]+):([\s\S]+)/, conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g, iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g, varname: "it", strip: !0, append: !0, selfcontained: !1, doNotSkipEncoded: !1 }, template: void 0, compile: void 0, log: !0 };
            d.encodeHTMLSource = function (e) { var n = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" }, t = e ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g; return function (e) { return e ? e.toString().replace(t, function (e) { return n[e] || e; }) : ""; }; }, u = function () { return this || (0, eval)("this"); }.apply(this), "undefined" != typeof module && module.exports ? module.exports = d : "function" == typeof define && define.amd ? define(function () { return d; }) : u.doT = d;
            var s = { append: { start: "'+(", end: ")+'", startencode: "'+encodeHTML(" }, split: { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" } }, p = /$^/;
            function l(e) { return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " "); }
            d.template = function (e, n, t) { var r, o, a = (n = n || d.templateSettings).append ? s.append : s.split, c = 0, i = n.use || n.define ? function r(o, e, a) { return ("string" == typeof e ? e : e.toString()).replace(o.define || p, function (e, r, n, t) { return 0 === r.indexOf("def.") && (r = r.substring(4)), r in a || (":" === n ? (o.defineParams && t.replace(o.defineParams, function (e, n, t) { a[r] = { arg: n, text: t }; }), r in a || (a[r] = t)) : new Function("def", "def['" + r + "']=" + t)(a)), ""; }).replace(o.use || p, function (e, n) { o.useParams && (n = n.replace(o.useParams, function (e, n, t, r) { if (a[t] && a[t].arg && r) {
                var o = (t + ":" + r).replace(/'|\\/g, "_");
                return a.__exp = a.__exp || {}, a.__exp[o] = a[t].text.replace(new RegExp("(^|[^\\w$])" + a[t].arg + "([^\\w$])", "g"), "$1" + r + "$2"), n + "def.__exp['" + o + "']";
            } })); var t = new Function("def", "return " + n)(a); return t ? r(o, t, a) : t; }); }(n, e, t || {}) : e; i = ("var out='" + (n.strip ? i.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : i).replace(/'|\\/g, "\\$&").replace(n.interpolate || p, function (e, n) { return a.start + l(n) + a.end; }).replace(n.encode || p, function (e, n) { return r = !0, a.startencode + l(n) + a.end; }).replace(n.conditional || p, function (e, n, t) { return n ? t ? "';}else if(" + l(t) + "){out+='" : "';}else{out+='" : t ? "';if(" + l(t) + "){out+='" : "';}out+='"; }).replace(n.iterate || p, function (e, n, t, r) { return n ? (c += 1, o = r || "i" + c, n = l(n), "';var arr" + c + "=" + n + ";if(arr" + c + "){var " + t + "," + o + "=-1,l" + c + "=arr" + c + ".length-1;while(" + o + "<l" + c + "){" + t + "=arr" + c + "[" + o + "+=1];out+='") : "';} } out+='"; }).replace(n.evaluate || p, function (e, n) { return "';" + l(n) + "out+='"; }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), r && (n.selfcontained || !u || u._encodeHTML || (u._encodeHTML = d.encodeHTMLSource(n.doNotSkipEncoded)), i = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + d.encodeHTMLSource.toString() + "(" + (n.doNotSkipEncoded || "") + "));" + i); try {
                return new Function(n.varname, i);
            }
            catch (e) {
                throw "undefined" != typeof console && console.log("Could not create a template function: " + i), e;
            } }, d.compile = function (e, n) { return d.template(e, null, n); };
        }.apply(this);
    }
    SnsDropdownApp.prototype.start = function () {
        // sns공유 템플릿을 가져와서 랜더링 해주기
        // @ts-ignore
        var snsDropdownTemplateFn = this.doT.template(this.getSnsDropdownTemplate());
        $('.snsDropdown').append(snsDropdownTemplateFn({ snsDataList: this.snsDataList }));
        // 클릭 이벤트
        this.clickEvent();
        // 알람 드롭다운 이벤트
        this.dropdownToggle('.sns-dropdown-btn', '.sns-dropdown-dropdown');
        this.dropdownShwoOff('.sns-dropdown-dropdown', this.targetSnsBtnCheck);
    };
    // 로그인 드롭다운을 끌때 프로필 버튼을 클릭했는지 체크
    SnsDropdownApp.prototype.targetSnsBtnCheck = function (target) {
        var isChecked = false;
        switch (target) {
            case 'sns-dropdown-btn':
                isChecked = true;
                break;
            case 'sns-dropdown-img':
                isChecked = true;
                break;
        }
        return isChecked;
    };
    // 버튼 클릭시 드롭다운 켜짐
    SnsDropdownApp.prototype.dropdownToggle = function (toggleBtn, dropDownClass) {
        var _this = this;
        $("" + toggleBtn).click(function () {
            ga('send', 'event', 'link', _this.serviceName, 'sns_dropdown_btn');
            $("" + dropDownClass).toggleClass('show');
            if (!$(toggleBtn).hasClass('show')) {
                // short url 가져와서 세팅
                _this.getBitlyUrl('.short-url-input');
            }
        });
    };
    // 드롭다운 껐다가 키기
    SnsDropdownApp.prototype.dropdownShwoOff = function (dropdownClass, callback) {
        var _this = this;
        // 프로필 메뉴 빼고 클릭시 드롭다운 꺼짐
        $(window).click(function ($event) {
            if (!callback($event.target.className)) {
                var dropdown = $("" + dropdownClass);
                if (dropdown.hasClass('show')) {
                    dropdown.removeClass('show');
                }
            }
        });
        $("" + dropdownClass).click(function ($event) {
            // 클릭한 태그가 a이거나 클릭한 태그의 부모가 a이거나 클릭한 클레스의 이름이 dropdown-close 이면 리턴
            if ($event.target.parentNode.tagName.toLowerCase() === 'a' || $event.target.tagName.toLowerCase() === 'a' || $event.target.className.indexOf('dropdown-close') !== -1) {
                return;
            }
            _this.preventClickEvent($event);
        });
    };
    // 마우스 클릭 이벤트 막기
    SnsDropdownApp.prototype.preventClickEvent = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    // 버튼들 클릭했을 때
    SnsDropdownApp.prototype.clickEvent = function () {
        var _this = this;
        var $snsDropdown = $('.sns-dropdown-dropdown');
        var shortUrlCopyBtn = $snsDropdown.find('.short-url-btn');
        shortUrlCopyBtn.click(function () {
            ga('send', 'event', 'link', _this.serviceName, 'short_url_btn');
            _this.urlCopyClipboard('.short-url-input');
        });
        $snsDropdown.find('.sns-item').click(function ($event) {
            var snsType = $event.target.getAttribute('data-sns-type');
            _this.setSnsShareData(snsType);
        });
    };
    // 복사하기
    SnsDropdownApp.prototype.urlCopyClipboard = function (target) {
        var copyTarget = document.querySelector(target);
        var textArea = document.createElement("textarea");
        document.body.appendChild(textArea);
        textArea.value = copyTarget.value;
        /* Select the text field */
        textArea.select();
        textArea.setSelectionRange(0, 99999); // for mobile
        /* Copy the text inside the text field */
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert("복사 되었습니다. ");
    };
    // short url 가져와서 셋팅
    SnsDropdownApp.prototype.getBitlyUrl = function (target) {
        if ($(target).val()) {
            return;
        }
        var shareUrl = document.location.href;
        var encodedUrl = encodeURIComponent(shareUrl);
        var bitLink = 'https://api-ssl.bitly.com/v3/shorten?access_token=6c9dde76a905863abc379017eeeebc29e072ae53&longUrl=' + encodedUrl + '&format=json';
        $.getJSON(bitLink, function (result, status) {
            if (result.status_txt === 'OK') {
                $("" + target).val(result.data.url);
            }
            else {
                $("" + target).val('short url을 만들기에 적적한 url이 아닙니다.');
                // alert('short url을 만들기에 적적한 url이 아닙니다.');
            }
        });
    };
    // sns dropdown 템플릿 가져오기
    SnsDropdownApp.prototype.getSnsDropdownTemplate = function () {
        return "\n            <style>\n                .snsDropdown { position: relative; }\n                .sns-dropdown-dropdown[snsDropdown] * {\n                    margin: 0;\n                    padding: 0;\n                    box-sizing: border-box;\n                }\n                .sns-dropdown-dropdown[snsDropdown] {\n                    padding: 25px 30px;\n                    background-color: #fff;\n                    border: 1px solid #e6e2e2;\n                    max-width: 330px;\n                    display: none;\n                    position: absolute;\n                    top: 32px;\n                    min-width: 280px;\n                    z-index: 999;\n                }\n                .snsDropdown .sns-dropdown-btn {\n                    display: inline-block;\n                    height: 31px;\n                    line-height: 29px;\n                    -webkit-border-radius: 4px;\n                    -moz-border-radius: 4px;\n                    border-radius: 4px;\n                    font-size: 14px;\n                    cursor: pointer;\n                    background-color: #ffffff;\n                    border: 1px solid #c4c4c4;\n                    color: #323232;\n                    font-weight: bold;\n                    padding: 0 20px;\n                    transition: opacity 0.2s, box-shadow 0.2s;\n                    text-align: center;\n                    letter-spacing: -0.5px;\n                }\n                .snsDropdown .sns-dropdown-btn .sns-dropdown-img {\n                    vertical-align: middle;\n                    width: 15px;\n                    height: 14px;\n                }\n                .sns-dropdown-dropdown[snsDropdown].show {\n                    display: block;\n                }\n                .sns-dropdown-dropdown[snsDropdown] .sns-list {\n                    list-style: none;\n                    overflow: hidden;\n                }\n                .sns-dropdown-dropdown[snsDropdown] .sns-list .sns-item {\n                    margin-right: 10px;\n                    cursor: pointer;\n                    float: left;\n                }\n                .sns-dropdown-dropdown[snsDropdown] .sns-list .sns-item:last-child {\n                    margin-right: 0;\n                }\n                .sns-dropdown-dropdown[snsDropdown] .sns-list .sns-item .sns-img {\n                    display: block;\n                    width: 40px;\n                    height: 40px;\n                    -webkit-border-radius: 50%;\n                    -moz-border-radius: 50%;\n                    border-radius: 50%;\n                }\n                .sns-dropdown-dropdown[snsDropdown] .sns-short-url {\n                    height: 35px;\n                    background-color: #f9f9f9;\n                    border: 1px solid #dfdfdf;\n                    color: #000;\n                    margin-top: 14px;\n                    margin-bottom: 12px;\n                    overflow: hidden;\n                }\n                .sns-dropdown-dropdown[snsDropdown] .sns-short-url .short-url-input {\n                    background-color: transparent;\n                    color: #323232;\n                    height: 35px;\n                    line-height: 35px;\n                    font-size: 12px;\n                    padding: 0 10px;\n                    width: 80%;\n                    float: left;\n                    border: 0;\n                    outline: none;\n                }\n                .sns-dropdown-dropdown[snsDropdown] .sns-short-url .short-url-btn {\n                    border-left: 1px solid #dfdfdf;\n                    color: #323232;\n                    font-size: 13px;\n                    line-height: 35px;\n                    display: inline-block;\n                    text-align: center;\n                    padding: 0;\n                    width: 20%;\n                    float: left;\n                    background-color: #ffffff;\n                    cursor: pointer;\n                }\n            </style>\n            <div class=\"sns-dropdown-dropdown\" snsDropdown>\n                <ul class=\"sns-list\">\n                    {{ for(var idx in it.snsDataList) { }}\n                    <li class=\"sns-item\" data-sns-type=\"{{=it.snsDataList[idx].snsName}}\">\n                        <img class=\"sns-img\" src=\"{{=it.snsDataList[idx].snsImg}}\" alt=\"img\" data-sns-type=\"{{=it.snsDataList[idx].snsName}}\" title=\"{{=it.snsDataList[idx].snsTitle}}\" />    \n                    </li>\n                    {{ } }}\n                </ul>\n                <div class=\"sns-short-url\">\n                    <input readonly=\"readonly\" type=\"text\" class=\"short-url-input\"> \n                    <span class=\"short-url-btn\">\uBCF5\uC0AC</span>\n                </div>\n            </div>\n        ";
    };
    // sns공유 정보를 모아서, 공유
    SnsDropdownApp.prototype.setSnsShareData = function (socialName) {
        ga('send', 'event', 'link', this.serviceName, 'sns-dropdown-item');
        var socialOpts = {
            txt: this.snsTitle,
            name: socialName,
            img: this.snsImg
        };
        this.snsSharing(socialOpts);
    };
    // sns공유 함수
    SnsDropdownApp.prototype.snsSharing = function (socialOpts) {
        var o = {};
        var snsType = socialOpts.name;
        var shareUrl = document.location.href;
        if (socialOpts.href) {
            shareUrl = socialOpts.href;
        }
        var txt = socialOpts.txt;
        var _url = encodeURIComponent(shareUrl);
        var _txt = encodeURIComponent(txt);
        var _br = encodeURIComponent('\r\n');
        var shareImage = socialOpts.img;
        switch (snsType) {
            case 'facebook':
                o = {
                    method: 'popup',
                    url: '//www.facebook.com/sharer/sharer.php?u=' + _url
                };
                break;
            case 'twitter':
                o = {
                    method: 'popup',
                    url: '//twitter.com/intent/tweet?text=' + _txt + '&url=' + _url
                };
                break;
            case 'google':
                o = {
                    method: 'popup',
                    url: '//plus.google.com/share?url=' + _url + '&image=' + shareImage
                };
                break;
            case 'blog':
                o = {
                    method: 'popup',
                    url: '//share.naver.com/web/shareView.nhn?url=' + _url + '&title=' + _txt
                };
                break;
            case 'band':
                o = {
                    method: 'web2app',
                    param: 'create/post?text=' + _txt + _br + _url,
                    a_store: 'itms-apps://itunes.apple.com/app/id542613198?mt=8',
                    g_store: 'market://details?id=com.nhn.android.band',
                    a_proto: 'bandapp://',
                    g_proto: 'scheme=bandapp;package=com.nhn.android.band'
                };
                break;
            default:
                alert('지원하지 않는 SNS입니다.');
                return;
        }
        switch (o.method) {
            case 'popup':
                window.open(o.url, "share_" + snsType, "resizable=no");
                break;
            case 'web2app':
                if (navigator.userAgent.match(/android/i)) {
                    // Android
                    setTimeout(function () { location.href = 'intent://' + o.param + '#Intent;' + o.g_proto + ';end'; });
                }
                else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)) {
                    // Apple
                    setTimeout(function () { location.href = o.a_store; });
                    setTimeout(function () { location.href = o.a_proto + o.param; });
                }
                else {
                    if (snsType === "band") {
                        var sTxt = _txt + " | " + _url;
                        window.open("http://www.band.us/plugin/share?body=" + sTxt, "share_band", "width=410, height=540, resizable=no");
                        return;
                    }
                    alert('이 기능은 모바일에서만 사용할 수 있습니다.');
                }
                break;
        }
    };
    return SnsDropdownApp;
}());
