
// /* ==========================================================================
//         通用元件 js
// ==========================================================================*/


var cover = $("#nav_cover"),
    toggle = $(".nav__toggle"),
    burger1 = toggle.find(".one"),
    burger2 = toggle.find(".two"),
    burger3 = toggle.find(".three");

  
var menu = new TimelineMax({ paused: true, reversed: true })

menu
  .to(cover, 0.6, { height: "210px" })
  .to(toggle, 0.3, { transform: "translate(5px, 5px)"}, 0)
  .to(burger2, 0.3, { autoAlpha: 0 }, 0)
  .to(burger1, 0.3, { rotation: 45, transformOrigin: "10%" }, 0)
  .to(burger3, 0.3, { rotation: -45, transformOrigin: "10%" }, 0)
  
    
$(".nav__toggle").click(function () {
  menu.reversed() ? menu.play() : menu.reverse();
});





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