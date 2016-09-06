/// <reference path="jquery-3.1.0.min.js" />

var i = 0;
var timer;
$(function() {
	// $(".pts").hover(function() {
	// 	$(".con").fadeIn();
	// 	 Stuff to do when the mouse enters the element 
	// }, function() {
	// 	$(".con").fadeOut();
	// 	/* Stuff to do when the mouse leaves the element */
	// });
	//鼠标放上去 显示按钮有缺陷！哎 再想办法！
	$(".pt").eq(0).show().siblings().hide();
    showTime();

    $(".tab").hover(function() {
    	i=$(this).index();
    	showPic();
    	clearInterval(timer);
    }, function() {
    	showTime();
    	/* Stuff to do when the mouse leaves the element */
    });

    $(".prve").click(function() {
    	clearInterval(timer);
    	if (i==0) {
    		i=5;
    	}
    		i--;
    		showPic();
    		showTime();
    	/* Act on the event */
    });
    $(".next").click(function() {
    	clearInterval(timer);
    	if (i==4) {
    		i=-1;
    	}
    		i++;
    		showPic();
    		showTime();
    	/* Act on the event */
    });
});


function showPic() {
	$(".pt").eq(i).fadeIn().siblings().fadeOut();
    $(".tab").eq(i).addClass('bg').siblings().removeClass('bg');
}

function showTime() {
	timer=setInterval(function () {	
    		i++;
    		if (i==5) {
    			i=0;
    		}
    		showPic();
    },2000);
	}