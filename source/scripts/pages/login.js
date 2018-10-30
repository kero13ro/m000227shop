
var $submenu_slider = $(".slcik-menu ul"),
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