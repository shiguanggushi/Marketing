$(document).ready(function(){
	        adjust();
	        $(window).resize(adjust);
	        
    		function adjust(){
    		    var devicewidth=parseInt($("html").css("width"));
    		    var devicefontsize=(devicewidth/320)*20;//计算当前设备自适应字体大小
    		    $("html").css("font-size",devicefontsize+"px");
    		}
    	});