

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