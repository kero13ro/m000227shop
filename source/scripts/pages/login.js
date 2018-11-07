
var $submenu_slider = $(".slcik-menu.eq9 ul"),
  settings_md = {
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    nextArrow: '<div class="icon-next"></div>',
    prevArrow: '<div class="icon-prev"></div>',
    
    responsive: [
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
    ]
  };


$submenu_slider.slick(settings_md);

$(window).on('resize', function () {
  if ($(window).width() > 991) {
    if ($submenu_slider.hasClass('slick-initialized')) {
      $submenu_slider.slick('unslick');
    }
    return;
  }

  if (!$submenu_slider.hasClass('slick-initialized')) {
    return $submenu_slider.slick(settings_md);
  }
});

$(window).trigger("resize");  





//非會員專區的slcik僅有5個
if ($(window).width() < 768) {
  $(".slcik-menu.eq5 ul").slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    nextArrow: '<div class="icon-next"></div>',
    prevArrow: '<div class="icon-prev"></div>',
  });
}


  


// 訂閱電子報
$("#epapper-js").find("div").click(function () {
  $(this).addClass("current");
  $(this).siblings("div").removeClass("current");

  var target = $(this).attr("data-page");
  $("." + target).siblings(".epapper__main").hide();
  $("." + target).show();
});




// 忘記密碼\ 送出成功對話框
$("#js-sent").click(function () {
  $("#member").find(".forget").hide();
  $("#member").addClass("darker");
  $(".modal.dark").show();
});




$("#qa .unit__q").click(function () {
  $("#qa .qa__content")
    .children("li")
    .removeClass("expend")
    .find(".unit__a")
    .slideUp(300);
  $(this).parent("li").addClass("expend");
  $(this).parent("li").find(".unit__a").slideDown(300);


});