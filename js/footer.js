// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let anchor of anchorLinks) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  
    // Add current year to copyright if needed
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
      const currentYear = new Date().getFullYear();
      const copyrightText = copyrightElement.textContent;
      
      // Only update if the year in the text is different from current year
      if (copyrightText.includes('2023') && currentYear !== 2023) {
        copyrightElement.textContent = copyrightText.replace('2023', currentYear);
      }
    }
  });