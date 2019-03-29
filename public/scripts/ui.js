"use strict";

var wW = $(window).width();
var wH = $(window).height();
var esc = $.Event("keydown", { keyCode: 27 });

//nav 當前頁面的樣式
var currentPage = sessionStorage.getItem("nav");
var navPages = $("#nav .nav_shop a, \
                  .logo");

navPages.filter("[href='" + currentPage + "']").addClass("current");

navPages.click(function () {
  var tmp = $(this).attr("href");
  sessionStorage.setItem("nav", tmp);
});

//qa 左右滑動目錄
var left = $(".control .icon-left-thin");
var right = $(".control .icon-right-thin");
var menu = $(".qa__menu .scrollbarX");

left.click(function () {
  var leftPos = menu.scrollLeft();
  menu.animate({ scrollLeft: leftPos - 200 }, 800);
});
right.click(function () {
  var leftPos = menu.scrollLeft();
  menu.animate({ scrollLeft: leftPos + 200 }, 800);
});
"use strict";

var cartNum = sessionStorage.getItem("cart") || " ";
var bedge = $("#nav .bedge");

function renewNum() {
  if (bedge.text() !== " ") {
    bedge.css("opacity", 1);
  } else {
    bedge.css("opacity", 0);
  }
}

var cartUnit = "\n  <div class=\"unit__content\"><img src=\"./styles/images/01-item03.jpg\">\n    <div class=\"info\">\n      <div class=\"calc\">$11,888 x 1</div>\n      <div class=\"delete\">\u79FB\u9664</div>\n    </div>\n  </div>\n  <div class=\"unit__title\">\u6708\u5B50\u88DC\u990A\u5169\u65E5\u9910(10\u65E5)</div>";

function addCartUnit() {
  var li = document.createElement('li');
  li.className = "unit";
  li.innerHTML = cartUnit;
  li.querySelector(".delete").onclick = function () {
    li.remove();
  };
  $(".cart-lsit ul").find("#mCSB_1_container").prepend(li);
}

$(".cart__content li").each(function () {
  var _this = $(this)[0];

  $(this).find(".delete").click(function () {
    _this.remove();
  });
});

bedge.text(cartNum);
renewNum();

$(".card .icon-cart").click(function (e) {
  e.preventDefault();
  cartNum++;
  addCartUnit();
  sessionStorage.setItem("cart", cartNum);
  bedge.text(cartNum);
  renewNum();
});

$("#tips-js").click(function () {
  $("html").addClass("tips-mode");

  $(document).on("lity:close", function () {
    $("html").removeClass("tips-mode");
  });
});

/* ==========================================================================
          greensock animation
 ==========================================================================*/

/*  首頁動畫
  -------------------------------------------------- */

var controller_index = new ScrollMagic.Controller(),
    s1_tl = new TimelineLite(),
    s1_card = $(".card");

s1_tl.staggerFrom(s1_card, 1, { autoAlpha: 0, y: 10 }, 0.3);

// let s1_slick = $("#index .slick "),
//   s1_tl = new TimelineLite();
// s1_chars40 = new SplitText(s1_sub40, { type: "words,chars" }).chars,

// s1_tl
//   .to(s1_slick, 3, { autoAlpha: 1 }, 0)
//   .from(s1_gradiant, 3, { autoAlpha: 0 }, 1)
//   .staggerFrom(s1_chars40, 0.8, { autoAlpha: 0, y: 15, scale: 0.9, ease: Power1.easeInOut }, 0.12, 1.5)
//   .staggerFrom(s1_chars28, 0.3, { autoAlpha: 0, y: 0, scale: 0.9, ease: Power1.easeInOut }, 0.08, 2)
//   .from(s1_dwon, 0.8, { autoAlpha: 0, scale: 0.9, transformOrigin: "center center", ease: Power1.easeIn }, "-=0.6")


/* ==========================================================================
        plugin slick init
==========================================================================*/

/*  plugin init
  -------------------------------------------------- */
// $(".imgLiquidFill").imgLiquid();


// $('.slick.landing').slick({
//   arrows: false,
//   dots: false,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 3000,
//   fade: true,
// });
"use strict";

//因為idBlock絕對定位，若內容較長，則會有被覆蓋的問題

if (wW <= 1300 && wW >= 768) {
  setTimeout(function () {
    var midBlockHeight = document.querySelector(".midBlock").offsetHeight;
    $(".tri-columns").height(midBlockHeight + 50);
    console.log(midBlockHeight);
  }, 100);
}

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

$(".icon-heart").click(function (params) {
  $(this).addClass("active");
});

$(document).ready(function () {
  $("#js-page a[data-page]").click(function () {

    $("#js-page a[data-page]").removeClass("active");
    $(this).addClass("active");
    var tmp = $(this).attr("data-page");

    $(".content").hide();
    $(".js-" + tmp).show();

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
if (wW < 767) {
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
  $(" .record__content, .cart__content ul").each(function () {
    $(this).mCustomScrollbar({
      axis: "y",
      theme: "minimal-dark"
    });
  });

  // $(".record__content").mCustomScrollbar({
  //   axis: "y",
  //   theme: "minimal-dark"
  // });

  $("#privacy .content").mCustomScrollbar({
    axis: "y",
    theme: "dark-thick"
  });
});

//還沒想到要如何共用
$("#close-bgc").click(function () {
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
    $("#dorpdown-js").fadeToggle(300).css("display", "flex");
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
'use strict';

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

  responsive: [{
    breakpoint: 765,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2
    }
  }]
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
    prevArrow: '<div class="icon-prev"></div>'
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
  $("#qa .qa__content").children("li").removeClass("expend").find(".unit__a").slideUp(300);
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
    for (var i = 0; i < textArray.length; i++) {
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
"use strict";

// /* ==========================================================================
//         通用元件 js
// ==========================================================================*/


var cover = $("#nav_cover"),
    toggle = $(".nav__toggle"),
    burger1 = toggle.find(".one"),
    burger2 = toggle.find(".two"),
    burger3 = toggle.find(".three");

var menu = new TimelineMax({ paused: true, reversed: true });

menu.to(cover, 0.6, { height: "210px" }).to(toggle, 0.3, { transform: "translate(5px, 5px)" }, 0).to(burger2, 0.3, { autoAlpha: 0 }, 0).to(burger1, 0.3, { rotation: 45, transformOrigin: "10%" }, 0).to(burger3, 0.3, { rotation: -45, transformOrigin: "10%" }, 0);

$(".nav__toggle").click(function () {
  menu.reversed() ? menu.play() : menu.reverse();
});

// /*  dashboard 在450以下會以 plus btn 顯示
//   -------------------------------------------------- */

// function openDashboard() {
//   dashboardStage.kill();
//   dashboardStage.play();
//   $dashboard.addClass("expend");
// }

// function closeDashboard() {
//   $dashboard.removeClass("expend");
//   dashboardStage.reverse(0);
// }

// if ($(window).width() <= 991) {

//   var $dashboard = $("#dashboard");
//   var $btnGroup = $("#dashboard > .gasp");
//   var $plus = $("#js-plus");
//   var dashboardStage = new TimelineMax();

//   dashboardStage.staggerTo($btnGroup, 0.3, { y: 0, autoAlpha: 1 }, 0.05).pause();
//   TweenLite.set($btnGroup, { y: 30, autoAlpha: 0 });

//   $plus.on("click", function () {
//     if (!$dashboard.hasClass("expend")) {
//       openDashboard();
//     } else {
//       closeDashboard();
//     }
//   });

// }

// /*  dashboard 768以下 從hover改成click


// -------------------------------------------------- */

// var btnWithBar = $("#dashboard > .white");
// var fixCover = $("#dashboard .cover");
// var dashboardCloseAllBar = function () {
//   btnWithBar.removeClass("expend");
//   fixCover.hide();
// };


// if ($(window).width() > 768) {
//   btnWithBar.hover(function () {
//     $(this).toggleClass("expend");
//   });
// } else {

//   btnWithBar.click(function () {
//     $(this).toggleClass("expend");
//     $(this).siblings(".white").removeClass("expend");

//     fixCover.show().click(function () {
//       dashboardCloseAllBar();
//     });
//   });

// }

// $(document).on('lity:close', function (event, instance) {
//   dashboardCloseAllBar();
// });

// $("#dashboard .icon-scan .bar").click(function (e) {
//   e.stopPropagation();
//   e.preventDefault();
// });
//# sourceMappingURL=ui.js.map
