








  // console.log(target)


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



$(document).ready(function () {
  $("#js-page a[data-page]").click(function() {

    $("#js-page a[data-page]").removeClass("active");
    $(this).addClass("active");
    var tmp = $(this).attr("data-page");

    $(".content").hide();
    $(`.js-${tmp}`).show();

    // $(".content").stop(true, false, true).fadeOut(300, function () {
    //   $(`.js-${tmp}`).fadeIn(300);
    // });
  });



});

