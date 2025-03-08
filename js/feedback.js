document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper
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