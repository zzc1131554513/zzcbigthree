var winPos;
$(window).scroll(function(){
	posit();
})
function posit(){
	winPos= $(window).scrollTop();
	if(winPos>850){
		$(".level").addClass("levp");
	}else{
		$(".level").removeClass("levp");
	}
}posit();

setInterval(function(){
	var liT=[],liL=[],liW =[],liF=[],liZ =[],liH=[];
	$(".rongy>div").each(function(i){
		liT[i] =$(this).css("top");
		liL[i] =$(this).css("left");
		liW[i] =$(this).css("width");
		liZ[i] = $(this).css("z-index");
		liH[i] = $(this).css("height");
	})
	$(".rongy>div").each(function(i){
		console.log(liH);
		var index;
		index= i +1;
		index>2?index=0:index=index;
		$(this).css("z-index",liZ[index]);
		$(this).animate({
			width : liW[index],
			left : liL[index],
			top : liT[index],
			height:liH[index]
		},1000);
	})
},3000)

