$(document).ready(function(){
    $(".intro").click(function(){
        $("html, body").animate({scrollTop : $("#content_1 .sub_01").offset().top - 80},1000);
        $("#open_menu").prop("checked", false); //prop() : [property : 속성] 내부의 변경할 값을 강제로 넣는다. ◎ -> ○
        return false;
    });
    $(".story").click(function(){
        $("html, body").animate({scrollTop : $("#content_1 .sub_02").offset().top - 80},1000);
        return false;
    });
    $(".journal").click(function(){
        $("html, body").animate({scrollTop : $("#content2 .sub_01").offset().top - 80},1000);
        return false;
    });
    $(".stores").click(function(){
        $("html, body").animate({scrollTop : $("#content2 .sub_02").offset().top - 80},1000);
        return false;
    });

});