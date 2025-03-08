document.addEventListener('DOMContentLoaded', function () {
  const weddingServices = [
    {
      icon: 'file-text',
      title: 'Сценарий свадьбы',
      subtitle: 'Количество гостей: от 5 до 100 гостей. Планирование и подготовка сценария программы',
      description: 'Мы придумываем творческие задания, создаём танцевальные батлы или играем в логические игры. А можем создать интерактив, и тогда все гости станут активными зрителями. Границ нет.',
      price: 'от 3 500 руб.'
    },
    {
      icon: 'music',
      title: 'Запись песни молодоженов',
      subtitle: '1 песня до 5 минут. Песня на свадьбу по вашей истории',
      description: 'Сейчас очень просто купить песню на свадьбу для любимой или любимого. Будут учтены все пожелания заказчика и подобраны красивые рифмы.',
      price: 'от 3 000 руб.'
    },
    {
      icon: 'map-pin',
      title: 'Организация выездной регистрации',
      subtitle: 'Продолжительность до 2 часов. Организация выездной регистрации брака',
      description: 'Мы подберем все составляющие церемонии, исходя из ваших пожеланий, или составим индивидуальное предложение под конкретный бюджет.',
      price: 'от 15 500 руб.'
    },
    {
      icon: 'book',
      title: 'Подготовка лав-стори молодоженов',
      subtitle: 'Формат слайд-шоу. Свадебные и love-story фотосессия',
      description: 'В стоимость услуги войдут фотографии подготовки невесты, кадры церемонии в мэрии, прогулки молодоженов по городу, съемка праздничного банкета.',
      price: 'от 3 000 руб.'
    },
    {
      icon: 'gift',
      title: 'Подготовка welcome-zone',
      subtitle: 'Подготовка welcome-zone',
      description: 'Пока собираются гости, в ожидании молодоженов их сфотографирует наш специалист, эти фото потом гости чуть позже увидят на экране.',
      price: 'от 3 500 руб.'
    },
    {
      icon: 'glasses',
      title: 'Подготовка девишника',
      subtitle: 'Продолжительность от 1 часа. Комплексная организация девишника «под ключ»',
      description: 'Прощайтесь с холостой жизнью и веселитесь вместе с подругами, не волнуясь о развлекательной программе, аренде локации или вкусном угощении.',
      price: 'от 10 000 руб.'
    },
    {
      icon: 'star',
      title: 'Подготовка мальчишника',
      subtitle: 'Продолжительность от 1 часа. Комплексная организация мальчишника «под ключ»',
      description: 'Мальчишник – веселая вечеринка перед свадьбой, в которой, как это ясно уже из самого названия, участвуют только мальчишки: жених и его лучшие друзья.',
      price: 'от 12 000 руб.'
    },
    {
      icon: 'heart',
      title: 'Режиссура свадебного дня',
      subtitle: 'Продолжительность от 1 часа. Режиссура свадебного дня',
      description: 'Мы заранее предоставляем вам план организационных мероприятий и встреч, информируем в удобном вам режиме и постоянно находимся с вами на связи.',
      price: 'от 3 300 руб / час',
    }
  ];

  // SVG icons
  const weddingIcons = {
    'mic': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 10V12C19 15.866 15.866 19 12 19M12 19C8.13401 19 5 15.866 5 12V10M12 19V23M8 23H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'file-text': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'camera': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'video': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 7L16 12L23 17V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'users': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'heart': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61V4.61Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'music': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5L21 3V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'map-pin': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'book': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'gift': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12V22H4V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 7H2V12H22V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'glasses': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 15C19.6569 15 21 13.6569 21 12C21 10.3431 19.6569 9 18 9C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'star': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  // Generate service items
  const weddingServicesList = document.getElementById('wedding-services-list');

  weddingServices.forEach((service, index) => {
    const serviceItem = document.createElement('div');
    serviceItem.className = 'wedding-service-item';
    serviceItem.style.animationDelay = `${index * 0.1}s`;

    serviceItem.innerHTML = `
        <div class="wedding-service-header">
          <div class="wedding-service-icon">
            ${weddingIcons[service.icon]}
          </div>
          <div class="wedding-service-price">
            ${service.price}
          </div>
        </div>
        <div class="wedding-service-content">
          <h3>${service.title}</h3>
          <p class="wedding-service-title">${service.subtitle}</p>
          <p class="wedding-service-description">${service.description}</p>
        </div>
      `;

    weddingServicesList.appendChild(serviceItem);
  });

  // Animate service items on scroll
  const weddingAnimateOnScroll = () => {
    const serviceItems = document.querySelectorAll('.wedding-service-item');

    serviceItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - 100) {
        setTimeout(() => {
          item.classList.add('wedding-animate');
        }, index * 100);
      }
    });
  };

  // Initial animation
  setTimeout(weddingAnimateOnScroll, 300);

  // Animate on scroll
  window.addEventListener('scroll', weddingAnimateOnScroll);

  // Add interactive hover effects
  const weddingAddHoverEffects = () => {
    const serviceItems = document.querySelectorAll('.wedding-service-item');

    serviceItems.forEach(item => {
      const icon = item.querySelector('.wedding-service-icon');
      const header = item.querySelector('.wedding-service-header');

      item.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        header.style.backgroundPosition = 'right center';
      });

      item.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
        header.style.backgroundPosition = 'left center';
      });
    });
  };

  weddingAddHoverEffects();

  // Add parallax effect to background elements
  document.addEventListener('mousemove', (e) => {
    const flowers = document.querySelectorAll('.wedding-flower');
    const hearts = document.querySelectorAll('.wedding-floating-heart');

    const moveX = (e.clientX - window.innerWidth / 2) / 50;
    const moveY = (e.clientY - window.innerHeight / 2) / 50;

    flowers.forEach((flower, index) => {
      const factor = (index + 1) * 0.2;
      flower.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px) scale(${0.5 + index * 0.1})`;
    });

    hearts.forEach((heart, index) => {
      const factor = (index + 1) * 0.3;
      heart.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
    });
  });
});