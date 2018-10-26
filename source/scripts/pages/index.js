

var wW = $(window).width();
var wH = $(window).height();

//首頁上方的slick
var landing_slider = $("#index .slider-show");
var navList = $("#index .slider-nav > li");

landing_slider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
});

landing_slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  var tmp = nextSlide;
  navList.removeClass("active");
  navList.eq(tmp).addClass("active");
});


navList.click(function () {
  var current = $(this).index();
  landing_slider.slick('slickGoTo',current);
});




//首頁中間的submenu
var submenu_slider = $("#index .submenu");
if (wW < 990 ) {
  // console.log("as")
  submenu_slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,


    nextArrow: '<div class="icon-next"></div>',
    prevArrow: '<div class="icon-prev"></div>'

  });
}

//暫時測試--切換頁簽。但是可能會被誤會成都使用ajax，應要有跳頁
//但做分頁可能會被要求模擬更多?
// $(".submenu a").click(function(){
//   $(".submenu a").removeClass("active");
//   $(this).addClass("active");
// });


//瀏覽紀錄的客製化卷軸
$(window).on("load", function () {
  $(".record__content").mCustomScrollbar({
    axis: "y",
    theme: "minimal-dark"
  });
});



//商品分類的目錄
if ( wW < 768  ) {
  $(".active")
    .css("display", "block")
    .css("opacity", "1")
    .siblings("li")
    .css("display", "block")
    .css("opacity", "1");

  $(".subtitle").click(function () {

    $(".catolog").find("li:not(.subtitle)").slideUp(200).css("opacity", "0");
    $(this).siblings("li").slideDown(200).css("opacity", "1");
  });
}


// if (wW < 768) {
//   var active = $(".active");
//   var activeCurrentList = $(".active").siblings("li").addBack();
//   var list = $(".catolog").find("li:not(.subtitle)");
//   // .css("display", "block")
//   // .css("opacity", "1")
//   // .siblings("li")
//   // .css("display", "block")
//   // .css("opacity", "1");

//   TweenLite.set(activeCurrentList, { "display": "block", "opacity": "1" });

//   $(".subtitle").click(function () {
//     var currentLsit = $(this).siblings("li");

//     TweenLite.to(list, 0.5, { autoalpha: 0, height: 0 });
//     TweenLite.to(currentLsit, 0.5, { autoalpha: 1, height: "60px" });
//     // TweenLite.to(activeCurrentList, 1, {});
//     // $(".catolog").find("li:not(.subtitle)").slideUp(200).css("opacity", "0");
//     // $(this).siblings("li").slideDown(200).css("opacity", "1");
//   });
// }