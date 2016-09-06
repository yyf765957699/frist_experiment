/// <reference path="jquery-1.10.2.min.js" />
$(function () {
    $(".uitem").hide();
    $(".litem>a").click(function () {
        $(this).next().fadeToggle(1000);
    });


    $(".fifth").click(function() {
        tip();
            });;
    $(".first").click(function() {
        layer.open({
          type: 1,
          title: false,
          closeBtn:1,
          area: '800px',
          skin: 'layui-layer-nobg', //没有背景色
          shadeClose: true,
          content: $('#tong')
        });
            });
});


    function tip() {
       layer.open({
          type: 1,
          title: false,
          closeBtn: 0,
          area: '800px',
          skin: 'layui-layer-nobg', //没有背景色
          shadeClose: true,
          content: $('#tong')
        });
    }