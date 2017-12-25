function sameSign(a,b){
    return (a^b)>=0;
}
function vector(a,b){
    return{
        x:b.x-a.x,
        y:b.y-a.y
    }
}
function vectorProduct(v1,v2){
    return v1.x * v2.y - v2.x * v1.y;
}
function isPointInTrangel(p,a,b,c){
    var pa = vector(p,a);
    var pb = vector(p,b);
    var pc = vector(p,c);

    var t1 = vectorProduct(pa,pb);
    var t2 = vectorProduct(pb,pc);
    var t3 = vectorProduct(pc,pa);
    return sameSign(t1,t2) && sameSign(t2,t3);
}
function needDelay(elem,topConrner,currMousePos){
    var offset = elem.offset();
    var topLeft = {
        x:offset.left,
        y:offset.top
    }
    var bottomLeft = {
        x:offset.left,
        y:offset.left + elem.width()
    }
    return isPointInTrangel(currMousePos,topConrner,topLeft,bottomLeft);
}

$(document).ready(function(){
    var sub = $("#sub");
    var wrapLeft = $(".wrap").offset().left;
    var sliderPos = $(".slider").offset().left-wrapLeft;
    var sliderW = $(".slider").width();
    var activeRow,activeMenu,timer;
    var mouseInSub = false;

    sub.on("mouseenter",function(e){
        mouseInSub = true;
    }).on("mouseleave",function(e){
        mouseInSub = false;
    })

    var mouseTrack = [];
    var moveHandler =function(e){
        mouseTrack.push({
            x:e.pageX,
            y:e.pageY
        })
        if(mouseTrack.length>3){
            mouseTrack.shift();
        }
    }
    $("#test")
        .on("mouseenter",function(e){
            sub.removeClass("none");
            $(document).bind("mousemove",moveHandler);
        })
        .on("mouseleave",function(e){
            sub.addClass("none");
            if(activeRow){
                activeRow.removeClass("active");
                activeRow = null;
            }
            if(activeMenu){
                activeMenu.addClass("none");
                activeMenu = null;
            }
            $(document).unbind('mousemove',moveHandler);
            $('.slider').css("left",sliderPos+"px");
            $('.slider').css("width",sliderW+"px");
        })
        .on("mouseenter",".wrap li",function(e){
            var wlt = $(".wrap").offset().left;
            if(!activeRow){
                activeRow = $(this).addClass("active");
                activeMenu = $('#' + $(e.target).data("id"));
                activeMenu.removeClass("none");
                if($(this).data("id") != "e" && $(this).data("id") != "f" && $(this).data("id") != "a"){
                	$(".lev-nav").removeClass("none");
                }else{
                	$(".lev-nav").addClass("none");
                }
            	$(".slider").css("left",($(".wrap ul li.active").offset().left-wlt)+"px");
            	$(".slider").css("width",($(".wrap ul li.active").width())+"px");
                return;
            }
            if(timer){
                clearTimeout(timer);
            }

        var currMousePos = mouseTrack[mouseTrack.length-1];
        var topConrner = mouseTrack[mouseTrack.length-2];

        var delay = needDelay(sub,topConrner,currMousePos);
        if(delay){
            timer = setTimeout(function(){
                if(mouseInSub){
                    return;
                }
                activeRow.removeClass("active");
                activeMenu.addClass("none");
                activeRow = $(this);
                activeRow.addClass("active");
                activeMenu = $("#"+$(e.target).data("id"));
                activeMenu.removeClass("none");
                if($(this).data("id") != "e" && $(this).data("id") != "f" && $(this).data("id") != "a"){
                	$(".lev-nav").removeClass("none");
                }else{
                	$(".lev-nav").addClass("none");
                }
                $(".slider").css("left",($(".wrap ul li.active").offset().left-wlt)+"px");
                $(".slider").css("width",($(".wrap ul li.active").width())+"px");
                timer = null;
            },300)
        }else{
            var prevActiveRow = activeRow;
            var prevActiveMenu = activeMenu;

            activeRow = $(this);
            activeMenu = $("#"+activeRow.data("id"));
            prevActiveRow.removeClass("active");
            prevActiveMenu.addClass("none");
            activeRow.addClass("active");
            activeMenu.removeClass("none");
            if($(this).data("id") != "e" && $(this).data("id") != "f" && $(this).data("id") != "a"){
                $(".lev-nav").removeClass("none");
            }else{
            	$(".lev-nav").addClass("none");
            }
            $(".slider").css("left",($(".wrap ul li.active").offset().left-wlt)+"px");
            $(".slider").css("width",($(".wrap ul li.active").width())+"px");
        }  
        })
})
/*footer*/
	var state = true;
	$(".pst>a").click(function(){
		if(state == true){
			$(".send").css("display","block");
			state = false;
		}else{
			$(".send").css("display","none");
			state = true;
		}
	})