$(document).ready(function() {
	//标签切换效果
	$(".usertype ul li").each(function(index) {
		var i = index;
		var s = $(this);
		s.on("click", function() {
			$(".selectedtype").removeClass("selectedtype");
			s.addClass("selectedtype");
			switch (i) {
				case 0:
					$(".infobox-inner").animate({
						left: "0"
					}, 300);
					break;
				case 1:
					$(".infobox-inner").animate({
						left: "-100%"
					}, 300);
					break;
			}
		});
	});
	
//	//复选框效果
//	$(".checkboxes input[type=checkbox]").on("change",function(){
//		if($(this).prop("checked")){
//			$(this).next().css("background-image","url(./img/checkbox2.png)");
//		}else{
//			$(this).next().css("background-image","url(./img/checkbox1.png)");
//		}
//	});
});