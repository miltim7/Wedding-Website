document.addEventListener('DOMContentLoaded', function () {
  // Мобильное меню – бургер для мобильной версии
  const burger = document.querySelector('.burger');
  const modalMenu = document.querySelector('.modal-menu');
  const burgerImg = burger ? burger.querySelector('img') : null;
  const menuIcon = "assets/icons/menu.png";
  const closeIcon = "assets/icons/close.png";

  if (burger) {
    burger.addEventListener('click', function () {
      if (modalMenu.classList.contains('open')) {
        modalMenu.classList.remove('open');
        burgerImg.style.opacity = 0;
        setTimeout(() => {
          burgerImg.src = menuIcon;
          burgerImg.style.opacity = 1;
        }, 300);
      } else {
        modalMenu.classList.add('open');
        burgerImg.style.opacity = 0;
        setTimeout(() => {
          burgerImg.src = closeIcon;
          burgerImg.style.opacity = 1;
        }, 300);
      }
    });

    modalMenu.addEventListener('click', function (e) {
      if (e.target === modalMenu) {
        modalMenu.classList.remove('open');
        burgerImg.style.opacity = 0;
        setTimeout(() => {
          burgerImg.src = menuIcon;
          burgerImg.style.opacity = 1;
        }, 300);
      }
    });
  }

  // Инфо-меню – бургер для десктоп/планшет (с иконкой menu.png)
  const infoBurger = document.querySelector('.info-burger');
  const infoModal = document.querySelector('.info-modal');
  const infoClose = document.querySelector('.info-close');

  const infoBurgerImg = infoBurger ? infoBurger.querySelector('img') : null;
  // Используем menu.png для инфо-бургера
  const infoDefaultIcon = "assets/icons/menu.png";
  const infoCloseIcon = "assets/icons/close.png";

  if (infoBurger) {
    infoBurger.addEventListener('click', function () {
      if (infoModal.classList.contains('open')) {
        infoModal.classList.remove('open');
        infoBurgerImg.style.opacity = 0;
        setTimeout(() => {
          infoBurgerImg.src = infoDefaultIcon;
          infoBurgerImg.style.opacity = 1;
        }, 300);
      } else {
        infoModal.classList.add('open');
        infoBurgerImg.style.opacity = 0;
        setTimeout(() => {
          infoBurgerImg.src = infoCloseIcon;
          infoBurgerImg.style.opacity = 1;
        }, 300);
      }
    });

    infoModal.addEventListener('click', function (e) {
      if (e.target === infoModal) {
        infoModal.classList.remove('open');
        infoBurgerImg.style.opacity = 0;
        setTimeout(() => {
          infoBurgerImg.src = infoDefaultIcon;
          infoBurgerImg.style.opacity = 1;
        }, 300);
      }
    });

    infoClose.addEventListener('click', () => {
      infoModal.classList.remove('open');
      infoBurgerImg.style.opacity = 0;
      setTimeout(() => {
        infoBurgerImg.src = infoDefaultIcon;
        infoBurgerImg.style.opacity = 1;
      }, 300);
    })
  }
});

