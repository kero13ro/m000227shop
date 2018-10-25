

$(".slider-show").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // asNavFor: ".slider-nav"
});

// $(".slider-nav").slick({
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   // asNavFor: ".slider-show",
// });

(function ($) {

  $(window).on("load", function () {
    $(".record__content").mCustomScrollbar({
      axis: "y",
      theme: "minimal-dark"
    }); 
    
  });

})(jQuery);



if ( $(window).width() < 768  ) {
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


// if ($(window).width() < 768) {
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