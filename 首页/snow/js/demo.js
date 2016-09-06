/// <reference path="jquery-1.10.2.min.js" />
var minSize = 5;//雪片的最小尺寸
var maxSize = 50;//雪片的最大尺寸
var newOn = 100;//间隔多长时间产生一个雪片，单位毫秒
//var flake = $("<div></div>").css("position", "absolute").html("❄");//雪片对象

var flake = $("<div></div>").css("position", "absolute").html('❄');

$(function () {
    ShowPic();
    var documentHeight = $(document).height();//获取当前浏览器的高度
    var documentWidth = $(document).width();//获取到当前浏览器的宽度
  
    setInterval(function () {
        var startLeft = documentWidth * Math.random();//获取到雪片产生的时候距离浏览器的左边的随机数
        var endLeft = documentWidth * Math.random();//获取到雪片下落之后距离浏览器的左边的随机数
        var flakeSize = minSize + maxSize * Math.random();//雪片的随机大小
        var flakeStartOpacity = 0.6 + 0.4 * Math.random();//雪片一开始的时候的透明度
        var flakeEndOpacity = 0.6 * Math.random();//雪片下落之后的透明度
        var durationFall = 3000 + 10 * documentHeight * Math.random();//雪片从最上面到最下面最需要的时间，单位是毫秒


        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "top": "-50px",
            "opacity": flakeStartOpacity,
            "font-size": flakeSize,
            "color": "#fff"
        }).animate({
            "left": endLeft,
            "opacity": flakeEndOpacity,
            "top": documentHeight + 50
        }, durationFall, function () {
            $(this).remove();
        });
    }, newOn);

});


function ShowPic() {
    $(".ig").eq(0).show().siblings().hide();
    var i = 0;
    setInterval(function () {
        i++;
        if (i == 6) {
            i = 0;
        }
        $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
    }, 3000);
}