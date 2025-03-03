// SVG Icons
const icons = {
    heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    send: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    rings: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="12" r="6"/><circle cx="16" cy="12" r="6"/></svg>`,
    flower: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/><path d="m8 16 1.5-1.5"/><path d="M14.5 9.5 16 8"/><path d="m8 8 1.5 1.5"/><path d="M14.5 14.5 16 16"/></svg>`
  };
  
  // Insert SVG icons
  document.getElementById('heartIcon').innerHTML = icons.heart;
  document.getElementById('phoneIcon').innerHTML = icons.phone;
  document.getElementById('mailIcon').innerHTML = icons.mail;
  document.getElementById('mapPinIcon').innerHTML = icons.mapPin;
  document.getElementById('facebookIcon').innerHTML = icons.facebook;
  document.getElementById('instagramIcon').innerHTML = icons.instagram;
  document.getElementById('sendIcon').innerHTML = icons.send;
  document.getElementById('checkIcon').innerHTML = icons.check;
  document.getElementById('ringsIcon').innerHTML = icons.rings;
  
  // Phone input formatting
  const phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
      // Format as +7 (XXX) XXX-XX-XX
      if (value.length <= 1) {
        value = `+7 (${value}`;
      } else if (value.length <= 4) {
        value = `+7 (${value.substring(1, 4)}`;
      } else if (value.length <= 7) {
        value = `+7 (${value.substring(1, 4)}) ${value.substring(4, 7)}`;
      } else if (value.length <= 9) {
        value = `+7 (${value.substring(1, 4)}) ${value.substring(4, 7)}-${value.substring(7, 9)}`;
      } else {
        value = `+7 (${value.substring(1, 4)}) ${value.substring(4, 7)}-${value.substring(7, 9)}-${value.substring(9, 11)}`;
      }
    }
    
    e.target.value = value;
  });
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };
    
    // Log form data (in a real app, you would send this to your backend)
    console.log('Form submitted:', formData);
    
    // Show success message
    successMessage.classList.add('show');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 3000);
    
    // Reset form
    contactForm.reset();
  });
  
  // Add subtle pulse effect to the heart icon
  const heartIcon = document.querySelector('.wed-brand-icon');
  setInterval(() => {
    heartIcon.classList.add('wed-pulse');
    setTimeout(() => {
      heartIcon.classList.remove('wed-pulse');
    }, 1000);
  }, 3000);
  
  // Add focus animations to form inputs
  const formInputs = document.querySelectorAll('.wed-form-input, .wed-form-textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.parentElement.classList.remove('focused');
    });
  });
  
  // Add subtle animation to wax seal
  const waxSeal = document.querySelector('.wed-wax-seal');
  document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    waxSeal.style.transform = `translateX(-50%) rotate(${scrollPosition / 100}deg)`;
  });