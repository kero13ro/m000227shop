
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





// submenu 在手機版時會、縮減文、斷行
String.prototype.breakAt = function () {
  if (this.length >= 7) {
    return this.substr(0, 4) + "<br/>" + this.substr(4);
  } else if (this.length >= 5) {
    return this.substr(0, 3) + "<br/>" + this.substr(3);
  } else {
    return this.substr(0, 2) + "<br/>" + this.substr(2);
  }
};

function breakMenu() {
  if ($(window).width() <= 500) {
    var textArray = $(".slcik-menu a");
    for (let i = 0; i < textArray.length; i++) {
      textArray[i].innerHTML = textArray[i].dataset.abbr.breakAt();
      textArray[i].dataset.long = textArray[i].innerText;
    }
  }
}


breakMenu();
window.addEventListener('resize', breakMenu, false);
// $(window).trigger("resize");  


// //submenu slick 初始化 及定位
// var indexOfSubmenu;
// var dashPos = window.location.pathname.indexOf("-");
// var $submenu_all = $('.submenu .slick');

// if (dashPos == -1) {
//   indexOfSubmenu = 1;
// } else {
//   indexOfSubmenu = window.location.pathname.charAt(dashPos + 1);
// }

// //slick 無法 goto 到最後一個 因此要指定到前一個
// var slideLength = $(".submenu .slick-slide").length;
// indexOfSubmenu == slideLength ? (indexOfSubmenu = indexOfSubmenu - 2) : (indexOfSubmenu = indexOfSubmenu - 1);
// // console.log(slideLength);
// // console.log(indexOfSubmenu);

// if ($submenu_all.hasClass('slick-initialized')) {
//   $submenu_all.slick('slickGoTo', (indexOfSubmenu), true);
// }