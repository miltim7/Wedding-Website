document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submitButton');
    const buttonText = document.getElementById('buttonText');
    const spinner = document.getElementById('spinner');
    
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      buttonText.style.opacity = '0';
      spinner.style.display = 'flex';
      submitButton.disabled = true;
      
      // Simulate authentication
      setTimeout(function() {
        console.log('Login attempt with:', { 
          email: emailInput.value, 
          password: passwordInput.value 
        });
        
        // Reset form
        emailInput.value = '';
        passwordInput.value = '';
        
        // Reset button state
        buttonText.style.opacity = '1';
        spinner.style.display = 'none';
        submitButton.disabled = false;
      }, 1500);
    });
  });