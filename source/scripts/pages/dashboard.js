
// /* ==========================================================================
//         通用元件 js
// ==========================================================================*/


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