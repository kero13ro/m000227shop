
// /* ==========================================================================
//         通用元件 js
// ==========================================================================*/

if (wW < 768) {
  var nav_cover = $("#nav_cover"),
      cover_list = $("#nav_cover a"),
      toggle = $(".nav__toggle"),
      burger1 = toggle.find(".one"),
      burger2 = toggle.find(".two"),
      burger3 = toggle.find(".three");
  
    
  var menuToggle = new TimelineMax({ paused: true, reversed: true, yoyo: true});
  
  menuToggle
    .set(nav_cover, { height: "100vh",autoAlpha: 0 })
    .to([burger1, burger2, burger3], 0.3, { backgroundColor: "#fff"})
  
    .to(burger2, 0.3, { autoAlpha: 0 }, 0)
    .to(burger1, 0.3, { rotation: 45, transformOrigin: "10%" }, 0)
    .to(burger3, 0.3, { rotation: -45, transformOrigin: "10%" }, 0)
    .to(nav_cover, 0.6, { autoAlpha: 1 }, "start")
    .staggerFrom(cover_list, 0.4, { autoAlpha: 0, x: 30, ease: Power2.easeOut}, 0.1, 0.3);
    
      
  $(".nav__toggle").click(function () {
    menuToggle.reversed() ? menuToggle.play() : menuToggle.reverse();
  });
}





/*  dashboard 在450以下會以 plus btn 顯示
  -------------------------------------------------- */

function openDashboard() {
  dashboardStage.kill();
  dashboardStage.play();
  $dashboard.addClass("expend");
}

function closeDashboard() {
  $dashboard.removeClass("expend");
  dashboardStage.reverse(0);
}

if ($(window).width() <= 991) {

  var $dashboard = $("#dashboard");
  var $btnGroup = $("#dashboard > .gasp");
  var $plus = $("#js-plus");
  var dashboardStage = new TimelineMax();

  dashboardStage.staggerTo($btnGroup, 0.3, { y: 0, autoAlpha: 1 }, 0.05).pause();
  TweenLite.set($btnGroup, { y: 30, autoAlpha: 0 });

  $plus.on("click", function () {
    if (!$dashboard.hasClass("expend")) {
      openDashboard();
    } else {
      closeDashboard();
    }
  });

}

/*  dashboard 768以下 從hover改成click


-------------------------------------------------- */

var btnWithBar = $("#dashboard > .white");
var fixCover = $("#dashboard .cover");
var dashboardCloseAllBar = function () {
  btnWithBar.removeClass("expend");
  fixCover.hide();
};


if ($(window).width() > 768) {
  btnWithBar.hover(function () {
    $(this).toggleClass("expend");
  });
} else {

  btnWithBar.click(function () {
    $(this).toggleClass("expend");
    $(this).siblings(".white").removeClass("expend");

    fixCover.show().click(function () {
      dashboardCloseAllBar();
    });
  });

}

$(document).on('lity:close', function (event, instance) {
  dashboardCloseAllBar();
});

$("#dashboard .icon-scan .bar").click(function (e) {
  e.stopPropagation();
  e.preventDefault();
});




/*  scroll
  -------------------------------------------------- */
$(".go-top").each(function () {
  $(this).click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1500, 'easeInOutCubic');
    return false;
  });
});

$(".wp").on('mousewheel', function () {
  $('html,body').stop();
});