var index = 0;
$(".small-view ul li").hover(function(){
	index = $(this).index();
	$(".big-view ul").find("li").eq(index).css("display","block").siblings().css("display","none");
	//$(".small-view ul li p").removeClass("dex");
	$(".small-view ul li").eq(index).find("p").addClass("dex");
})
var winPos;
$(window).scroll(function(){
	posit();
})
function posit(){
	winPos= $(window).scrollTop();
	if(winPos>850){
		$(".fc-nav").css({"position":"fixed","left":"0px","top":"0px","z-index":"20"});
		$(".nav-list").css({"padding-top":"0px","box-shadow":"0 3px 4px #bbb"});
		$(".nav-list ul").css("margin-top","0px");
	}else{
		$(".fc-nav").attr("style","");
		$(".nav-list").attr("style","");
		$(".nav-list ul").attr("style","");
	}
}posit();