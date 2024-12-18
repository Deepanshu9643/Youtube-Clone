import axios from 'axios';
const form = document.querySelector('.login-form');
const emailBox = document.querySelector('#email');
const passwordBox = document.querySelector('#password');
const loadingOverlay = document.getElementById('loadingOverlay');
const loginButton = document.querySelector('.btn');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = emailBox.value;
  const password = passwordBox.value;

  // Clear previous error message
  errorMessage.style.display = 'none';
  errorMessage.textContent = '';

  if (!email || !password) {
    errorMessage.textContent = "All fields are required";
    errorMessage.style.display = 'block';
    return;
  }
  if (password.length < 6) {
    errorMessage.textContent = 'Password should be at least 6 characters long';
    errorMessage.style.display = 'block';
    return;
  }

  // Show loading overlay and disable login button after validation
  loadingOverlay.style.display = 'flex';
  loginButton.disabled = true;

  const loginData = { email, password };

  try {
    const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login", loginData);

    // Hide loading overlay and re-enable login button
    loadingOverlay.style.display = 'none';
    loginButton.disabled = false;

    if (response.data.success) {
      // Redirect to YouTube clone 
      window.location.href = "youtube/Youtube.html";
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.innerText = "Invalid Email or Password";
    errorMessage.style.display = 'block';
    // Hide loading overlay and re-enable login button on error
    loadingOverlay.style.display = 'none';
    loginButton.disabled = false;
  }
});

