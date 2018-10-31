
var navPages = $("#nav .nav_shop a, .logo");
var currentPage = sessionStorage.getItem("nav");

navPages.filter("[href='" + currentPage + "']").addClass("current");

navPages.click(function () {
  var tmp = $(this).attr("href");  
  sessionStorage.setItem("nav", tmp);
});







  /* ==========================================================================
            greensock animation
   ==========================================================================*/

/*  首頁動畫
  -------------------------------------------------- */

  // var controller_index = new ScrollMagic.Controller();

  // //場景一
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
    
    