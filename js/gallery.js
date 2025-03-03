// Load the CSS styles from the external file
document.addEventListener('DOMContentLoaded', function() {
  const MatrimonyPhotoSlider = {
    activeIndex: 0,
    isDragging: false,
    startPosition: 0,
    currentTranslate: 0,
    previousTranslate: 0,
    animationRequestId: 0,
    isSmallScreen: window.innerWidth < 1024,
    
    // DOM elements
    sliderStrip: document.querySelector('.slider-content-strip'),
    viewportArea: document.querySelector('.slider-visible-area'),
    previousButton: document.querySelector('.prev-control'),
    nextButton: document.querySelector('.next-control'),
    dotsContainer: document.querySelector('.slider-navigation-dots'),
    imageFrames: document.querySelectorAll('.slider-image-frame'),
    
    frameWidth: 0,
    framesPerView: 0,
    totalFrames: 0,
    
    initialize: function() {
      this.framesPerView = this.isSmallScreen ? 1 : 3;
      this.totalFrames = this.imageFrames.length;
      
      // Create navigation dots
      this.createNavigationDots();
      
      // Set initial active slide
      this.updateActiveFrame();
      
      // Add event listeners
      this.setupEventListeners();
      
      // Set initial dimensions
      this.calculateDimensions();
      
      // Handle window resize
      window.addEventListener('resize', () => {
        this.isSmallScreen = window.innerWidth < 1024;
        this.framesPerView = this.isSmallScreen ? 1 : 3;
        this.calculateDimensions();
        this.updateSliderPosition(true);
      });
    },
    
    createNavigationDots: function() {
      // Clear any existing dots
      this.dotsContainer.innerHTML = '';
      
      // Create a dot for each image frame
      for (let i = 0; i < this.totalFrames; i++) {
        const dot = document.createElement('div');
        dot.classList.add('navigation-dot');
        dot.dataset.position = i;
        
        dot.addEventListener('click', () => {
          this.goToFrame(i);
        });
        
        this.dotsContainer.appendChild(dot);
      }
    },
    
    calculateDimensions: function() {
      this.frameWidth = this.viewportArea.offsetWidth / this.framesPerView;
      
      this.imageFrames.forEach(frame => {
        frame.style.width = `${this.frameWidth}px`;
      });
    },
    
    updateActiveFrame: function() {
      const dots = document.querySelectorAll('.navigation-dot');
      
      this.imageFrames.forEach((frame, index) => {
        if (index === this.activeIndex) {
          frame.classList.add('slider-image-active');
        } else {
          frame.classList.remove('slider-image-active');
        }
      });
      
      dots.forEach((dot, index) => {
        if (index === this.activeIndex) {
          dot.classList.add('navigation-dot-active');
        } else {
          dot.classList.remove('navigation-dot-active');
        }
      });
    },
    
    updateSliderPosition: function(immediate = false) {
      let offset;
      
      if (this.isSmallScreen) {
        offset = -this.activeIndex * this.frameWidth;
      } else {
        // For desktop, center the active slide
        offset = -this.activeIndex * this.frameWidth + (this.viewportArea.offsetWidth - this.frameWidth) / 2;
      }
      
      if (immediate) {
        this.sliderStrip.style.transition = 'none';
        this.sliderStrip.style.transform = `translateX(${offset}px)`;
        // Force reflow
        this.sliderStrip.offsetHeight;
        this.sliderStrip.style.transition = 'transform 0.5s ease-in-out';
      } else {
        this.sliderStrip.style.transform = `translateX(${offset}px)`;
      }
    },
    
    goToFrame: function(index) {
      if (index < 0) {
        this.activeIndex = this.totalFrames - 1;
      } else if (index >= this.totalFrames) {
        this.activeIndex = 0;
      } else {
        this.activeIndex = index;
      }
      
      this.updateActiveFrame();
      this.updateSliderPosition();
    },
    
    setupEventListeners: function() {
      // Arrow navigation
      this.previousButton.addEventListener('click', () => {
        this.goToFrame(this.activeIndex - 1);
      });
      
      this.nextButton.addEventListener('click', () => {
        this.goToFrame(this.activeIndex + 1);
      });
      
      // Touch events for drag
      this.sliderStrip.addEventListener('touchstart', this.handleTouchStart.bind(this));
      this.sliderStrip.addEventListener('touchmove', this.handleTouchMove.bind(this));
      this.sliderStrip.addEventListener('touchend', this.handleTouchEnd.bind(this));
      
      // Mouse events for drag
      this.sliderStrip.addEventListener('mousedown', this.handleTouchStart.bind(this));
      window.addEventListener('mousemove', this.handleTouchMove.bind(this));
      window.addEventListener('mouseup', this.handleTouchEnd.bind(this));
      window.addEventListener('mouseleave', this.handleTouchEnd.bind(this));
      
      // Prevent context menu on long press
      this.sliderStrip.addEventListener('contextmenu', e => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
      
      // Keyboard navigation
      document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') {
          this.goToFrame(this.activeIndex - 1);
        } else if (e.key === 'ArrowRight') {
          this.goToFrame(this.activeIndex + 1);
        }
      });
    },
    
    getPointerX: function(event) {
      return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    },
    
    handleTouchStart: function(event) {
      this.isDragging = true;
      this.startPosition = this.getPointerX(event);
      this.animationRequestId = requestAnimationFrame(this.animateSlider.bind(this));
      this.sliderStrip.style.cursor = 'grabbing';
    },
    
    handleTouchMove: function(event) {
      if (!this.isDragging) return;
      
      const currentPosition = this.getPointerX(event);
      this.currentTranslate = this.previousTranslate + currentPosition - this.startPosition;
    },
    
    handleTouchEnd: function() {
      this.isDragging = false;
      cancelAnimationFrame(this.animationRequestId);
      this.sliderStrip.style.cursor = 'grab';
      
      const movedBy = this.currentTranslate - this.previousTranslate;
      
      // If moved enough negative, move to next slide
      if (movedBy < -100) {
        this.goToFrame(this.activeIndex + 1);
      }
      // If moved enough positive, move to previous slide
      else if (movedBy > 100) {
        this.goToFrame(this.activeIndex - 1);
      }
      // Otherwise, stay at current slide
      else {
        this.goToFrame(this.activeIndex);
      }
    },
    
    animateSlider: function() {
      if (this.isDragging) {
        let offset;
        
        if (this.isSmallScreen) {
          offset = this.currentTranslate;
        } else {
          // For desktop, maintain the centered position
          const baseOffset = -this.activeIndex * this.frameWidth + (this.viewportArea.offsetWidth - this.frameWidth) / 2;
          offset = baseOffset + (this.currentTranslate - this.previousTranslate);
        }
        
        this.sliderStrip.style.transform = `translateX(${offset}px)`;
        this.animationRequestId = requestAnimationFrame(this.animateSlider.bind(this));
      }
    }
  };

  // Initialize the slider
  MatrimonyPhotoSlider.initialize();
});