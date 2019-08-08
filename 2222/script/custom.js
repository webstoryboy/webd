//네비게이션
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
});


//currentIndex = 0; 첫번째 이미지 : 0
//currentIndex = 1; 두번째 이미지 : -389
//currentIndex = 2; 세번째 이미지 : -778

//이미지 슬라이드(상하)
//        var currentIndex = 0; //첫번째 이미지
//        
//        setInterval(function(){
//            if(currentIndex < 2){
//                currentIndex++;
//            } else {
//                currentIndex = 0;
//            }
//            var slidePosition = currentIndex * (-389)+"px";
//            $(".slideList").animate({top: slidePosition},400);
//            
//        },3000);

//이미지 슬라이드(좌우)
var currentIndex = 0;

setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-1000)+"px";
    $(".slideList").animate({ left:slidePosition },400);
},3000);

//탭메뉴
var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(event){
    event.preventDefault();
    var target = $(this);
    var index = target.index();
    //alert(index);
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display","none");
    tabCont.eq(index).css("display","block");
});

//레이어 팝업
$("#content1 .right").click(function(){
    $(".layer").slideDown(300);
    $(".layer_bg").show();
});
$(".layer .close").click(function(){
    $(".layer").slideUp(300);
    $(".layer_bg").hide();
});















