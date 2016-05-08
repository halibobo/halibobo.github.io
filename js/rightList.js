	$(function() {
		 var $backToTopTxt = "返回顶部", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
				.text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
					$("html, body").animate({ scrollTop: 0 }, 120);
			}), $backToTopFun = function() {
				var st = $(document).scrollTop(), winh = $(window).height();
				(st > 0)? $backToTopEle.show(): $backToTopEle.hide();
				//IE6下的定位
				var browser=navigator.appName 
				var b_version=navigator.appVersion 
				var version=b_version.split(";"); 
				var trim_Version=version[1].replace(/[ ]/g,""); 
				if(browser=="Microsoft Internet Explorer" && (trim_Version=="MSIE6.0"||trim_Version=="MSIE7.0"||trim_Version=="MSIE8.0")) 
				{ 
					$backToTopEle.css("top", st + winh - 166);
				} 
				/*if (!window.XMLHttpRequest){
					$backToTopEle.css("top", st + winh - 166);
				}*/
			};
			$(window).bind("scroll", $backToTopFun);
			$(function() { $backToTopFun(); });
	});	

