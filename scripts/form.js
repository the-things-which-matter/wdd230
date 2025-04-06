document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;



document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const ratingInput = document.getElementById('pageRating');
    const ratingValue = document.getElementById('ratingValue');
  
  
    ratingInput.addEventListener('input', () => {
      ratingValue.textContent = ratingInput.value;
    });
  
  
    form.addEventListener('submit', function (e) {
      if (password.value !== confirmPassword.value) {
        e.preventDefault();
        alert("Passwords do not match. Please try again.");
        password.value = "";
        confirmPassword.value = "";
        password.focus();
      }
    });
  });