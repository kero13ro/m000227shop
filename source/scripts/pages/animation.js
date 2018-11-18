

var cartNum = sessionStorage.getItem("cart") || " ";
var bedge = $("#nav .bedge");

function renewNum() {
  if (bedge.text() !== " ") {
    bedge.css("opacity", 1);
  } else {
    bedge.css("opacity", 0);
  }
}

var cartUnit = `
  <div class="unit__content"><img src="./styles/images/01-item03.jpg">
    <div class="info">
      <div class="calc">$11,888 x 1</div>
      <div class="delete">移除</div>
    </div>
  </div>
  <div class="unit__title">月子補養兩日餐(10日)</div>`;



function addCartUnit() {
  var li = document.createElement('li');
  li.className = "unit";
  li.innerHTML = cartUnit;
  li.querySelector(".delete").onclick = function () {li.remove();};
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


$("#tips-js").click(function() {
  $("html").addClass("tips-mode");

  $(document).on("lity:close", function() {
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

  s1_tl
    .staggerFrom(s1_card, 1, { autoAlpha: 0 ,y: 10}, 0.3)
  


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

