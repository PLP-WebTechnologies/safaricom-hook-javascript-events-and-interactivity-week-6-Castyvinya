// Form Validation and Unlocking Main Content
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Get error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
  
    let isValid = true;
  
    // Validate Name (Minimum 3 characters)
    if (name.length < 3) {
      nameError.textContent = "Name must be at least 3 characters long.";
      isValid = false;
    }
  
    // Validate Email (Basic pattern check)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    }
  
    // Validate Password (8 chars, 1 uppercase, 1 number)
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password.match(passwordPattern)) {
      passwordError.textContent = "Password must be at least 8 characters, include one uppercase letter and one number.";
      isValid = false;
    }
  
    // If all validations pass, reveal main content and hide form
    if (isValid) {
      document.getElementById("mainContent").style.display = "block"; // Show main content
      document.getElementById("userForm").style.display = "none"; // Hide form
    }
  });






// Toggle background color function
document.getElementById('colorToggleBtn').onclick = function() {
    const currentColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = currentColor === 'lightblue' ? 'lightcoral' : 'lightblue';
  };
  // Update paragraph text size based on slider value
function updateTextSize() {
    const textSize = document.getElementById('textSizeSlider').value;
    document.getElementById('sliderValue').innerText = `${textSize}px`;
    document.getElementById('paragraphText').style.fontSize = `${textSize}px`;
  }
   // Modal Functionality
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close-btn');

// Open Modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
};

// Close Modal when clicking close button
closeModalBtn.onclick = function() {
  modal.style.display = "none";
};

// Close Modal when clicking outside the modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};