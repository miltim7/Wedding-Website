document.addEventListener('DOMContentLoaded', function() {
  // Initialize Reviews Swiper
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    speed: 1000,
    effect: 'slide',
    mousewheel: {
      enabled: true,
      sensitivity: 1
    },
    keyboard: {
      enabled: true
    },
    pagination: {
      el: '.reviews-swiper__pagination',
      clickable: true,
      dynamicBullets: true,
      type: 'bullets'
    },
    navigation: {
      nextEl: '.reviews-swiper__button-next',
      prevEl: '.reviews-swiper__button-prev'
    },
    on: {
      slideChange: function () {
        this.pagination.update();
      }
    }
  });

  // Handle file input
  const fileInput = document.getElementById('photoUpload');
  const fileNameDisplay = document.getElementById('fileNameDisplay');

  fileInput.addEventListener('change', function(e) {
    if (e.target.files && e.target.files[0]) {
      fileNameDisplay.textContent = e.target.files[0].name;
    }
  });

  // Handle form submission
  const form = document.getElementById('feedbackForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted');
  });
});