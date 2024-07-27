//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  speed: 1200,
  loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      hide: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      autoplay: {
        delay: 3500,
      },
  });