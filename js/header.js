document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const modalMenu = document.querySelector('.modal-menu');
  const burgerImg = burger ? burger.querySelector('img') : null;

  function getIcons() {
    return {
      menu: "assets/icons/menu-white.png",
      close: "assets/icons/close-white.png"
    };
    if (window.scrollY > 0) {
      return {
        menu: "assets/icons/menu-black.png",
        close: "assets/icons/close-black.png"
      };
    } else {
      return {
        menu: "assets/icons/menu-white.png",
        close: "assets/icons/close-white.png"
      };
    }
  }

  if (burger) {
    burger.addEventListener('click', function () {
      const icons = getIcons();
      if (modalMenu.classList.contains('open')) {
        modalMenu.classList.remove('open');
        burgerImg.style.opacity = 0;
        setTimeout(() => {
          burgerImg.src = icons.menu;
          burgerImg.style.opacity = 1;
        }, 300);
      } else {
        modalMenu.classList.add('open');
        burgerImg.style.opacity = 0;
        setTimeout(() => {
          burgerImg.src = icons.close;
          burgerImg.style.opacity = 1;
        }, 300);
      }
    });

    modalMenu.addEventListener('click', function (e) {
      if (e.target === modalMenu) {
        modalMenu.classList.remove('open');
        burgerImg.style.opacity = 0;
        setTimeout(() => {
          burgerImg.src = getIcons().menu;
          burgerImg.style.opacity = 1;
        }, 300);
      }
    });
  }

  const infoBurger = document.querySelector('.info-burger');
  const infoModal = document.querySelector('.info-modal');
  const infoClose = document.querySelector('.info-close');
  const infoBurgerImg = infoBurger ? infoBurger.querySelector('img') : null;

  if (infoBurger) {
    infoBurger.addEventListener('click', function () {
      const icons = getIcons();
      if (infoModal.classList.contains('open')) {
        infoModal.classList.remove('open');
        infoBurgerImg.style.opacity = 0;
        setTimeout(() => {
          infoBurgerImg.src = icons.menu;
          infoBurgerImg.style.opacity = 1;
        }, 300);
      } else {
        infoModal.classList.add('open');
        infoBurgerImg.style.opacity = 0;
        setTimeout(() => {
          infoBurgerImg.src = icons.close;
          infoBurgerImg.style.opacity = 1;
        }, 300);
      }
    });

    infoModal.addEventListener('click', function (e) {
      if (e.target === infoModal) {
        infoModal.classList.remove('open');
        infoBurgerImg.style.opacity = 0;
        setTimeout(() => {
          infoBurgerImg.src = getIcons().menu;
          infoBurgerImg.style.opacity = 1;
        }, 300);
      }
    });

    infoClose.addEventListener('click', () => {
      infoModal.classList.remove('open');
      infoBurgerImg.style.opacity = 0;
      setTimeout(() => {
        infoBurgerImg.src = getIcons().menu;
        infoBurgerImg.style.opacity = 1;
      }, 300);
    });
  }

  window.addEventListener('scroll', function () {

    const header = document.querySelector('.fixed-header');
    header.classList.remove('scrolled');

    const menu = document.querySelector('.burger img');
    menu.src = 'assets/icons/menu-white.png';

    const whatsapp = document.querySelector('.whatsapp img');
    whatsapp.src = 'assets/images/whatsapp-white.png';

    const logo = document.querySelector('.logo');
    logo.src = 'assets/images/logo-white.png';

    // if (window.scrollY > 0) {
    //   header.classList.add('scrolled');

    //   const menu = document.querySelector('.burger img');
    //   menu.src = 'assets/icons/menu-black.png';

    //   const whatsapp = document.querySelector('.whatsapp img');
    //   whatsapp.src = 'assets/images/whatsapp-black.png';

    //   const logo = document.querySelector('.logo');
    //   logo.src = 'assets/images/logo-black.png';

    // } else {
    //   header.classList.remove('scrolled');

    //   const menu = document.querySelector('.burger img');
    //   menu.src = 'assets/icons/menu-white.png';

    //   const whatsapp = document.querySelector('.whatsapp img');
    //   whatsapp.src = 'assets/images/whatsapp-white.png';

    //   const logo = document.querySelector('.logo');
    //   logo.src = 'assets/images/logo-white.png';
    // }
  });
});
