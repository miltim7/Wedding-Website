// Add any JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the hero section is properly sized
    const resizeHero = () => {
      const heroSection = document.querySelector('.hero-section');
      const windowHeight = window.innerHeight;
      
      // Always set the hero section to full viewport height
      heroSection.style.height = `${windowHeight}px`;
      
      // Adjust layout based on screen size
      const heroContent = document.querySelector('.hero-content');
      const heroText = document.querySelector('.hero-text');
      const heroImage = document.querySelector('.hero-image');
      const ctaButton = document.querySelector('.cta-button');
      
      if (window.innerWidth <= 1024) {
        // For smaller screens, stack the elements
        heroContent.style.flexDirection = 'column';
        heroText.style.position = 'relative';
        heroText.style.left = '0';
        heroText.style.top = '0';
        heroText.style.transform = 'none';
        heroText.style.textAlign = 'center';
        
        heroImage.style.position = 'relative';
        heroImage.style.left = '0';
        heroImage.style.bottom = '0';
        heroImage.style.transform = 'none';
        heroImage.style.height = window.innerWidth <= 768 ? '45%' : '50%';
        
        if (ctaButton.parentNode === heroImage) {
          heroImage.removeChild(ctaButton);
          heroContent.insertBefore(ctaButton, heroImage);
        }
        
        ctaButton.style.position = 'relative';
        ctaButton.style.bottom = 'auto';
        ctaButton.style.left = 'auto';
        ctaButton.style.transform = 'none';
        ctaButton.style.margin = '30px auto 0';
        ctaButton.style.display = 'block';
      } else {
        // For larger screens, use the original layout
        heroContent.style.flexDirection = 'row';
        heroText.style.position = 'absolute';
        heroText.style.left = '5%';
        heroText.style.top = '50%';
        heroText.style.transform = 'translateY(-50%)';
        heroText.style.textAlign = 'left';
        
        heroImage.style.position = 'absolute';
        heroImage.style.left = '50%';
        heroImage.style.bottom = '0';
        heroImage.style.transform = 'translateX(-50%)';
        heroImage.style.height = '85%';
        
        if (ctaButton.parentNode !== heroImage) {
          heroContent.removeChild(ctaButton);
          heroImage.appendChild(ctaButton);
        }
        
        ctaButton.style.position = 'absolute';
        ctaButton.style.bottom = '10%';
        ctaButton.style.left = '50%';
        ctaButton.style.transform = 'translateX(-50%)';
        ctaButton.style.margin = '0';
        ctaButton.style.display = 'inline-block';
      }
    };
    
    // Initial call and event listener
    resizeHero();
    window.addEventListener('resize', resizeHero);
    
    // Button hover effect
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', function() {
      if (window.innerWidth <= 1024) {
        this.style.transform = 'scale(1.05)';
      } else {
        this.style.transform = 'translateX(-50%) scale(1.05)';
      }
      this.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
    });
    
    ctaButton.addEventListener('mouseout', function() {
      if (window.innerWidth <= 1024) {
        this.style.transform = 'none';
      } else {
        this.style.transform = 'translateX(-50%)';
      }
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });
  });