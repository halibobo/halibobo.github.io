window.onload = function (){
	$(function() {
		var current_index = -1;
		var colors = new Array('#F79946','#2a75a1','#7b4867','#657b57');
		var colorsLine = new Array('#eb7811', '#0092ea', '#c82dce', '#5ca32c');
		var downloadPath = "https://www.linghuabao.com/download/linghuabao.ipa";

		var cBrowser;
		if ((window.navigator.userAgent.indexOf("Safari") >= 0 && navigator.userAgent.toLowerCase().indexOf("version") >= 0)||(window.navigator.userAgent.match(/iP(ad|hone|od)/i))) {
		    cBrowser = "safari";
		    downloadPath = "itms-services://?action=download-manifest&url=https://www.linghuabao.com/download/makemoney.plist";
		    window.location.href = downloadPath;
		}

		$("#install_button").mouseover(function () {
		    document.getElementById("install_button").src = 'images/install2.png';
		});

		

		 $("#help ul li").mouseover(function() {
			$("#help ul li").eq(0).css('background',colors[0]);
		 });

		 $("#help ul li").mouseout(function() {
				$("#help ul li").eq(0).css('background','none');
		 });

		 $("#help ul li")[0].style.borderBottomColor = colorsLine[0]; //css('border-top-color',colors[i]);	
		 $("#help ul li")[0].style.background =  "none";
		  

		  $("#install_button").click(function () {
		      window.location.href = downloadPath;
		  });

		 $("#install_button").mouseout(function() {
		     document.getElementById("install_button").src = 'images/install1.png';
		});
		 

		$("#install_button").mousedown(function() {
		    document.getElementById("install_button").src = 'images/install3.png';
		});

		$(window).resize(function () {
		    var wid = $(window).width();
		    
		    var newcontentwidth = wid - 200;
		    var headwidth = wid;
		    $("#headerborder").css({
		        width: headwidth <  600 ? 600 : (headwidth > 1100 ? 1100 : headwidth)
		    });
		    $(".newcontentCont").css({
		        width: newcontentwidth < 600 ? 600 : (newcontentwidth > 1500 ? 1500 : newcontentwidth)
		    });
		    $(".contentCont").css({
		        width: newcontentwidth < 660 ? 660 : (newcontentwidth > 1200 ? 1200 : newcontentwidth)
		    });
		    $(".myselfheight").css({
		        marginTop: $(".myselfheight").width() * 0.2
		    });

		    $(".myselfwidth").css({
		        marginLeft: $(".contentCont").width()*0.08
		    });
		});
		

		$(function () {
		    $(window).resize();
		});

		$("#qrcode").qrcode({
		    render: "table",
		    text: downloadPath,
		    width: "130",
		    height: "130"
		});

	    //$('#qrcode').qrcode(downloadPath);
		
		
	});

		function isWeiXin(){
	    var ua = window.navigator.userAgent.toLowerCase();
	    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	        return true;
	    }else{
	        return false;
	    }
	}
}

