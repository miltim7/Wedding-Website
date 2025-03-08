document.addEventListener("DOMContentLoaded", function () {
  var sergeyImage = document.querySelector('.pulse-image');
  var modal = document.getElementById('video-modal');
  var closeModal = document.querySelector('.close-modal');
  var modalVideo = document.getElementById('modal-video');

  // Открытие модального окна при клике на фото Сергея
  sergeyImage.addEventListener('click', function () {
    modal.style.display = 'block';
    modalVideo.play();
  });

  // Закрытие модального окна по клику на крестик
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.currentTime = 0;
  });

  // Закрытие модального окна при клике вне контента
  window.addEventListener('click', function (e) {
    if (e.target == modal) {
      modal.style.display = 'none';
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
  });
});
