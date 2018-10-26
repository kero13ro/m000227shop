










$(".slick-intro").on('beforeChange', function (event, slick, currentSlide, nextSlide) {

  var showPic = $(".show");

  var target = $(this).find("[data-slick-index=" + nextSlide + "]")[0].style.backgroundImage;
  // console.log(target)

  var tl = new TimelineLite();

  tl.set(showPic, { backgroundImage: target })
    .to(showPic, 0.3, { opacity: 1 });


  // $(".show").css("backgroundImage", target);
});

$(".slick-intro").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
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

