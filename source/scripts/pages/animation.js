


/*  購物車新增動畫
  -------------------------------------------------- */

// var cartUnit = `
//   <div class="unit__content"><img src="./styles/images/01-item03.jpg">
//     <div class="info">
//       <div class="calc">$11,888 x 1</div>
//       <div class="delete">移除</div>
//     </div>
//   </div>
//   <div class="unit__title">月子補養兩日餐(10日)</div>`;


// var cart = $("#nav .cart");
// var cart_y_tl = new TimelineMax();


// function cartAnimation() {
//   cart_y_tl
//     .to(cart, 0.3, { y: 4, ease: Power2.easeOut })
//     .to(cart, 0.3, { y: -1, ease: Power2.easeOut })
//     .to(cart, 0.3, { y: 0, ease: Power2.easeOut });
  
//   TweenLite.to(cir, 0.8, { autoAlpha: 0, scale: 2.2, ease: Power2.easeOut });
//   TweenLite.set(cir, { autoAlpha: 1, scale: 1});
// }

// function checkBorderStyle() {
//   if ($(".cart__content").find("a").length == 0) {
//     TweenLite.to($(".cart__total"), 0.5, { "borderTop": "1px solid white"});
//   } else {
//     TweenLite.to($(".cart__total"), 0.5, { "borderTop": "1px solid black" });
//   }
// }

// function removeNode(target) {
//   var cart_tl = new TimelineLite();

//   cart_tl
//     .call(cartAnimation)
//     .to(target, 0.8, { height: "0px", autoAlpha: 0, "paddingTop": "0px", "paddingBottom": "0px", ease: Power3.easeOut})
//     .call(function () { target.remove(); })
//     .call(checkBorderStyle)
//     .call(renewBedge);
//     // .call(checkHeight);
  
// }

// function addNode(target) {
//   var cart_tl = new TimelineLite();
//   cart_tl
//     .call(cartAnimation)
//     .from(target, 0.8, { height: "0px", autoAlpha: 0, "paddingTop": "0px", "paddingBottom": "0px", ease: Power3.easeOut})
//     .call(checkBorderStyle)
//     .call(renewBedge);
// }


// function addCartUnit() {
//   var li = document.createElement('a');
//   li.className = "unit";
//   li.innerHTML = cartUnit;
//   li.style.overflow = "hidden";
//   li.querySelector(".delete").onclick = function () { removeNode(li);  };

//   $(".cart-list .cart__list").find("#mCSB_1_container").prepend(li);
//   addNode(li);
// }


// $(".cart__content a").each(function () {
//   var _this = this;

//   $(this).find(".delete").click(function () {    
//     removeNode(_this);
//   });
// });



// var originList;
// var bedge = $("#nav .bedge");
// var cir = $("#nav .circle");

// function renewBedge() {
//   originList = $(".cart__list").find("a").length;
//   bedge.text(originList);
//   if (bedge.text() !== " ") {
//     bedge.css("opacity", 1);
//   } else {
//     bedge.css("opacity", 0);
//   }
// }


if (document.getElementById("index") !== null || document.getElementById("category") !== null) {
  // renewBedge();
  $(".card .icon-cart").click(function (e) {
    e.preventDefault();
    // addCartUnit();
  });
}




/*  滿額禮大放送 彈跳視窗(固定式)
  -------------------------------------------------- */

$("#tips-js").click(function() {
  $("html").addClass("tips-mode");

  $(document).on("lity:close", function() {
    $("html").removeClass("tips-mode");
  });
});



var triggerAD = sessionStorage.getItem("notTriggerAnimate");

if (triggerAD !== "true") {
}


  /*  首頁入場動畫
    -------------------------------------------------- */

if (document.querySelector("main").classList.contains("landing") &&
    wW > 991 &&
    triggerAD !== "true") {

  var index_tl = new TimelineMax(),
      main = $("main.landing"),
      nav_logo = $("#nav .logo"),
      nav_office = $("#nav .nav_office"),
      nav_float = $("#nav .float"),
      nav_shop = $("#nav_cover li"),
      slider = $("#index .slider-show"),
      slider_nav = $("#index .slider-nav"),
      index_submenu = $("#index .submenu"),
      leftBlockTitle = $("#index .leftBlock .block__title"),
      leftBlockBgc = $("#dorpdown-js"),
      leftBlockText = $("#dorpdown-js ul > *"),
      midBlockTitle = $("#index .midBlock .block__title"),
      midBlockContent = $("#index .midBlock .items__content"),
      midCard = $("#index .card"),
      rightBlockTitle = $("#index .rightBlock .block__title"),
      rightBlockRecord = $("#index .rightBlock .record__content "),
      rightBlockCart = $("#index .rightBlock .cart__content"),
      dashboard_btn = $("#dashboard .gasp"),
      logoDisplay = function() {
        nav_logo.addClass("animate");
      };

  index_tl
    .set([leftBlockTitle, midBlockTitle, rightBlockTitle], {
      overflow: "hidden"
    })
    .set(["#index", "#dashboard"], { opacity: 1 })

    .to(main, 0.6, { backgroundColor: "#f5f1f0" })

    .from("#nav", 0.6, { y: -10 }, 0.3)
    .to("#nav", 0.6, { opacity: 1 }, 0.3)

    .call(logoDisplay, ["param1"], this, 0.3)
    .addLabel("logoEnd", 0.9)

    .staggerFrom(nav_shop, 2, { autoAlpha: 0 }, 0.3, "logoEnd")
    .from([slider, slider_nav], 2, { autoAlpha: 0, y: -30 }, "logoEnd")

    .addLabel("slideEnd", 1.8)
    .from([nav_float, nav_office], 1.6, { autoAlpha: 0 }, "slideEnd")
    .from(index_submenu, 2, { autoAlpha: 0 }, "slideEnd")
    .staggerFromTo(
      dashboard_btn,
      0.4,
      { autoAlpha: 0, y: -20, scale: 0.7 },
      { autoAlpha: 1, y: 0, scale: 1 },
      0.2,
      "slideEnd"
    )

    .staggerFrom(
      [leftBlockTitle, midBlockTitle, rightBlockTitle],
      1,
      { autoAlpha: 0, y: -15 },
      0.2,
      "slideEnd+=0.3"
    )
    .staggerFrom(
      [leftBlockBgc, midBlockContent, [rightBlockRecord, rightBlockCart]],
      1,
      { autoAlpha: 0 },
      0.4,
      "slideEnd+=0.3"
    )
    .staggerFrom(midCard, 1.2, { autoAlpha: 0, y: 10 }, 0.1, "-=1");
    
} else {
  $("main").removeClass("landing");
}

sessionStorage.setItem("notTriggerAnimate", "true");
  




if ( !(document.querySelector("main").classList.contains("landing")) && (wW > 991)) {

  var contaniner = $("main > .container + *");
  var contaninerChild = contaniner.find("> *");

  TweenLite.set(contaniner,{ "opacity": "1" });
  // TweenLite.from(contaniner, 1, { autoAlpha: 0});
  TweenMax.staggerFrom(contaninerChild, 1, { autoAlpha: 0 ,y: -10}, 0.3);
}
