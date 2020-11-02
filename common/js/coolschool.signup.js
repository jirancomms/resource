var _logoutProcUrl	= "/logoutProc";
var _getPrivacyUrl	= ('https:' == document.location.protocol ? 'https://' : 'http://') + getSiteUrl() +"/contract/privacy?type=html";
var _memberUrl = getMemberURL();

$(function(){
	$(".loginLayer").click(function(){					// header 로그인 / 회원가입
		/*var httpProtocol = ('https:' == document.location.protocol ? 'https://' : 'http://');
		var callbackURL = httpProtocol+document.location.hostname+"/callback";
		location.href= "https://"+_memberUrl+"/login?response_type=code&client_id=NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==&redirect_uri="+encodeURI(callbackURL);*/
		//alert('aaa');
		var isDev=false;
		var subDomain = getSubDomain(window.location.host);
		if(subDomain=='dev'){
			isDev=true;
		}

		var loginHelper = new CoolLibrary.Login();
		loginHelper.goDefaultCoolLogin('NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==','' ,isDev);
        // loginHelper.coolLoginCallbackRedirect("https://photobook.coolschool.co.kr/cool/login.aspx");
	});

	$("#logoutBtn").click(function(){					// header 로그인 / 회원가입

		$.ajax({
			url: ('https:' == document.location.protocol ? 'https://' : 'http://') + _memberUrl +"/logout?client_id=NjM2YzY5NjU2ZTc0NWY2OTY0M2E0MzRmNGY0YzUzNDM0ODRmNGY0Yw==",
			type: "GET",
			contentType: "application/json",
			dataType: "jsonp",
			success: function (data) {
				logoutCoolschool();
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert('status:' + xhr.status);
				alert('throwerr:' + thrownError);
			}
		});
	});

	function logoutCoolschool() {
		$.ajax({
			url : _logoutProcUrl,
			success : function(){
				location.href="/";
			},
			error: function (xhr, textStatus, errorThrown) {}
		});
	}
	
	$(".privacy").click(function () {
		window.open(_getPrivacyUrl, "coolschool_term", "width=500,height=350");
	});

	/*function goCoolPage(){
		location.href="https://www.cooltown.co.kr/page/coolmessenger";
	}*/
	$(".question").click(function () {
		location.href="https://www.cooltown.co.kr/page/coolmessenger";
	});

});
