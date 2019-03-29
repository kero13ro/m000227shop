

//因為idBlock絕對定位，若內容較長，則會有被覆蓋的問題
function checkHeight() {
  var midBlockHeight = document.querySelector(".midBlock").offsetHeight;
  var container = $(".tri-columns");
  if (midBlockHeight !== container.height()) {
    container.height(midBlockHeight);
  }
}

$(document).ready(function() {
  if (document.querySelector(".midBlock") !== null) {
    
    window.addEventListener('resize', function () {
      var wW = $(window).width();
      if (wW >= 768 && wW <= 1300) {
        checkHeight();
      } else {
        $(".tri-columns").height("auto");
      }
    });
    checkHeight();
  }
});



//商品介紹的輪播、圖片放大
$(".slick-intro .unit").on("click", function () {

  var showPic = $("#js-show");
  // var target = $(this)[0].style.backgroundImage;
  var target = this.style.backgroundImage;
  TweenLite.set(showPic, { backgroundImage: target });
});

$("#js-show").click(function () {
  var target = this.style.backgroundImage;
  var addDot = `../${target.slice(5,-2)}`; 
  lity(addDot);
});

$(".slick-intro").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,

  nextArrow: '<div class="icon-next"></div>',
  prevArrow: '<div class="icon-prev"></div>'
});



$(".icon-heart").click(function() {
  $(this).addClass("active");
});


// intro.html 下方分頁 toggle
$(document).ready(function () {
  var pageBtn = $("#js-page a[data-page]");

  pageBtn.each(function () {
    $(this).click(function () {

      pageBtn.removeClass("active");
      $(this).addClass("active");
      
      var activePage = $(this).attr("data-page");
      $(".main_content").hide();
      $(`.js-${activePage}`).show();

    });
  });
});



//首頁上方的slick
var landing_slider = $("#index .slider-show");
var navList = $("#index .slider-nav > li");

landing_slider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',

  nextArrow: '<div class="icon-next"></div>',
  prevArrow: '<div class="icon-prev"></div>'
});

landing_slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  var tmp = nextSlide;
  navList.removeClass("active");
  navList.eq(tmp).addClass("active");
});


navList.click(function () {
  var current = $(this).index();
  landing_slider.slick('slickGoTo', current);
});



//首頁中間的submenu
var submenu_slider = $("#index .submenu");
if (wW < 767) {
  submenu_slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: '<div class="icon-next"></div>',
    prevArrow: '<div class="icon-prev"></div>'
  });
}


//瀏覽紀錄的客製化卷軸
$(window).on("load", function () {
  $(" .record__content, .cart__content ul").each(function () {
    $(this).mCustomScrollbar({
      axis: "y",
      theme: "minimal-dark"
    });
  });
  
  
  // $(".record__content").mCustomScrollbar({
  //   axis: "y",
  //   theme: "minimal-dark"
  // });

  //0104
  //   $("#privacy .content").mCustomScrollbar({
  //     axis: "y",
  //     theme: "dark-thick"
  //   });
});



$("#close-bgc").click(function() {
  $(".catalog .block__title").trigger("click");
});


//商品分類的目錄
if (wW <= 450) {
  two_column_dropdwon();
  inner_collapse();

} else if (wW <= 991) {
  two_column_dropdwon();
}


function two_column_dropdwon() {
  $(".catalog .block__title").click(function () {    
    $("#dorpdown-js").fadeToggle(300).css("display","flex");
    $("#close-bgc").toggleClass("active");
  });
}

function inner_collapse() {
  $(".subtitle").click(function () {
    $(this).next("div").slideDown(200);
    $(this).parent("ul").siblings("ul").children("div").slideUp(200);
  });
}

