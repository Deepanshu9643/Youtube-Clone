import axios from 'axios';

let form = document.querySelector('.signup-form');
let name_box = document.querySelector('#name');
let email_box = document.querySelector('#email');
let password_box = document.querySelector('#password');
let confirm_box = document.querySelector('#confirm');
let successMessage = document.getElementById('successMessage');
let errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Clear previous messages
  successMessage.style.display = 'none';
  successMessage.textContent = '';
  errorMessage.style.display = 'none';
  errorMessage.textContent = '';

  let name = name_box.value;
  let email = email_box.value;
  let password = password_box.value;
  let confirm = confirm_box.value;

  if (!name || !email || !password || !confirm) {
    errorMessage.textContent = "All fields are required";
    errorMessage.style.display = 'block';
    return;
  }

  if (password !== confirm) {
    errorMessage.textContent = 'Passwords do not match';
    errorMessage.style.display = 'block';
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = 'Password should be at least 6 characters long';
    errorMessage.style.display = 'block';
    return;
  }

  let signup_data = {
    name,
    email,
    password,
  };

  try {
    const response = await axios.post(
      "https://instagram-express-app.vercel.app/api/auth/signup",
      signup_data
    );

    if (response.data.success) {
      successMessage.textContent = "Signup successful! Redirecting to login page...";
      successMessage.style.display = 'block';
      setTimeout(() => {
        window.location.href = "http://localhost:5173/";
      }, 2000); 
    }

    // Clear the form fields after a successful signup
    name_box.value = "";
    email_box.value = "";
    password_box.value = "";
    confirm_box.value = "";
    
  }catch (error) {
    console.error('Error:', error);
    errorMessage.textContent = "User already exists. Please log in.";
    errorMessage.style.display = 'block';
  }
});