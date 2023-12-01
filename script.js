document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      if (validateUsername() && validateEmail() && validatePassword()) {
        alert('Form submitted successfully!');
       
      }
    });
  
    usernameInput.addEventListener('input', validateUsername);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
  
    function validateUsername() {
      const usernameValue = usernameInput.value.trim();
      usernameError.textContent = '';
  
      if (!usernameValue) {
        usernameError.textContent = 'Username is required';
        return false;
      }
  
      return true;
    }
  
    function validateEmail() {
      const emailValue = emailInput.value.trim();
      emailError.textContent = '';
  
      if (!emailValue) {
        emailError.textContent = 'Email is required';
        return false;
      }
  
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Invalid email format';
        return false;
      }
  
      return true;
    }
  
    function validatePassword() {
      const passwordValue = passwordInput.value.trim();
      passwordError.textContent = '';
  
      if (!passwordValue) {
        passwordError.textContent = 'Password is required';
        return false;
      }
  
    
      if (passwordValue.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        return false;
      }
  
      return true;
    }
  });
  