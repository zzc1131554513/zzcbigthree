/*banner*/
var index = 0;
var clearTime = null;
for (let i=0;i<$(".banner-img li").length;i++) {
	$(".dug").append("<li></li>")
}

$(".dug").find("li").eq(0).addClass("active");
$(".dug").css("margin-left",-($(".dug").width()/2)+"px");
$(".dug li").hover(function(){
	index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".banner-img li").eq(index).addClass("dex").siblings().removeClass("dex");
})


function auto(){
	clearTime = setInterval(function(){
		index++;
		if(index>$(".banner-img li").length-1){
			index=0;
		}
		$(".dug li").eq(index).addClass("active").siblings().removeClass("active");
		$(".banner-img li").eq(index).addClass("dex").siblings().removeClass("dex");
	},3500)
}
auto();

$(".lf").click(function(){
	index--;
	if(index<0){
		index = 2;
	}
	$(".dug li").eq(index).addClass("active").siblings().removeClass("active");
	$(".banner-img li").eq(index).addClass("dex").siblings().removeClass("dex");
})
$(".ri").click(function(){
	index++;
	if(index>2){
		index = 0;
	}
	$(".dug li").eq(index).addClass("active").siblings().removeClass("active");
	$(".banner-img li").eq(index).addClass("dex").siblings().removeClass("dex");
})
$(".banner").mouseover(function(){
	$(".lf").css("display","block");
	$(".ri").css("display","block");
	clearInterval(clearTime);
})
$(".banner").mouseout(function(){
	$(".lf").css("display","none");
	$(".ri").css("display","none");
	auto();
})