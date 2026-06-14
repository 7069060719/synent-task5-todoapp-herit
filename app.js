// Toggle password visibility
function togglePw() {
  const pw = document.getElementById('password');
  pw.type = pw.type === 'password' ? 'text' : 'password';
}

// Handle login form validation
function handleLogin() {
  const email    = document.getElementById('email');
  const password = document.getElementById('password');
  const emailErr = document.getElementById('emailErr');
  const passErr  = document.getElementById('passErr');
  const toast    = document.getElementById('successToast');
  let valid = true;

  // Reset previous errors
  email.classList.remove('error');    emailErr.classList.remove('show');
  password.classList.remove('error'); passErr.classList.remove('show');
  toast.classList.remove('show');

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add('error');
    emailErr.classList.add('show');
    valid = false;
  }

  // Validate password length
  if (password.value.length < 6) {
    password.classList.add('error');
    passErr.classList.add('show');
    valid = false;
  }

  // If valid, simulate login
  if (valid) {
    const btn = document.getElementById('loginBtn');
    btn.textContent = 'Signing in…';
    btn.classList.add('loading');
    setTimeout(() => {
      btn.textContent = 'Sign In →';
      btn.classList.remove('loading');
      toast.classList.add('show');
    }, 1200);
  }
}