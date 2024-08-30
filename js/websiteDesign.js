const swiper = new Swiper(".coverflow", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    stretch: 0,
    depth: 300,
    modifier: 1,
    rotate: 0,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
});
