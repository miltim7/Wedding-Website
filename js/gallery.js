const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  speed: 1000,
  effect: 'slide',
  mousewheel: false,
  keyboard: {
      enabled: true
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});