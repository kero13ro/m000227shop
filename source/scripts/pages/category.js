


// $(".slick-intro").on('beforeChange', function (event, slick, currentSlide, nextSlide) {

//   var showPic = $("#js-show");
//   var target = $(this).find("[data-slick-index=" + nextSlide + "]")[0].style.backgroundImage;
//   TweenLite.fromTo(showPic, 1, { backgroundImage: target, opacity: 0 }, { opacity: 1 });
// });

$(".slick-intro .unit").on("click", function () {

  var showPic = $("#js-show");
  var target = $(this)[0].style.backgroundImage;
  TweenLite.set(showPic, { backgroundImage: target });
});

$(".slick-intro").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,

  nextArrow: '<div class="icon-next"></div>',
  prevArrow: '<div class="icon-prev"></div>'
});



$(document).ready(function () {
  $("#js-page a[data-page]").click(function() {

    $("#js-page a[data-page]").removeClass("active");
    $(this).addClass("active");
    var tmp = $(this).attr("data-page");

    $(".content").hide();
    $(`.js-${tmp}`).show();

    // $(".content").stop(true, false, true).fadeOut(300, function () {
    //   $(`.js-${tmp}`).fadeIn(300);
    // });
  });
});





//首頁上方的slick
var landing_slider = $("#index .slider-show");
var navList = $("#index .slider-nav > li");

landing_slider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',

  nextArrow: '<div class="icon-next"></div>',
  prevArrow: '<div class="icon-prev"></div>'
});

landing_slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  var tmp = nextSlide;
  navList.removeClass("active");
  navList.eq(tmp).addClass("active");
});


navList.click(function () {
  var current = $(this).index();
  landing_slider.slick('slickGoTo', current);
});



//首頁中間的submenu
var submenu_slider = $("#index .submenu");
if (wW < 990) {
  submenu_slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: '<div class="icon-next"></div>',
    prevArrow: '<div class="icon-prev"></div>'
  });
}


//瀏覽紀錄的客製化卷軸
$(window).on("load", function () {
  $(".record__content").mCustomScrollbar({
    axis: "y",
    theme: "minimal-dark"
  });

  $("#privacy .content").mCustomScrollbar({
    axis: "y",
    theme: "dark-thick"
  });
});



//還沒想到要如何共用
$("#close-bgc").click(function() {
  $(".catalog .block__title").trigger("click");
});


//商品分類的目錄
if (wW <= 450) {
  two_column_dropdwon();
  inner_collapse();

} else if (wW <= 767) {
  two_column_dropdwon();
}


function two_column_dropdwon() {
  $(".catalog .block__title").click(function () {    
    $("#dorpdown-js").fadeToggle(300).css("display","flex");
    $("#close-bgc").toggleClass("active");
  });
}

function inner_collapse() {
  $(".subtitle").click(function () {
    $(this).next("div").slideDown(200);
    $(this).parent("ul").siblings("ul").children("div").slideUp(200);
  });
}



// 尚未確定要展示 切換不同產品分類的動畫

// $(".submenu a").click(function(){
//   $(".submenu a").removeClass("active");
//   $(this).addClass("active");
// });