$(document).ready(function () {

  AOS.init();
  $(window).on('load', function () {
    AOS.refresh();
  });



  var ad = new Swiper(".ad", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  var simonplus1degree = new Swiper(".simonplus1degree", {
    autoplay: {
     delay: 3000,
    disableOnInteraction: false,
    },

    slidesPerView: 2,
    spaceBetween: 100,
    centeredSlides: true,
    loop: true,
  });

  $(".tab-cont li").hide();

  $(".tab-btn li").eq(0).addClass("active");
  $(".tab-cont li").eq(0).show();
  
  $(".tab-btn li").click(function (){
  $(this).addClass("active").siblings().removeClass("active");
  var indexNum = $(this).index();
  $(".tab-cont li").eq(indexNum).show().siblings().hide();
  });



})