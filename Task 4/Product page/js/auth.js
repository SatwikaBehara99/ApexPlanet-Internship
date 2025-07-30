// Save signup data
function handleSignup(e) {
  e.preventDefault();
  
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const phone = document.getElementById("signupPhone").value;
  const gender = document.getElementById("signupGender").value;
  const address = document.getElementById("signupAddress").value;

  const userData = {
    name,
    email,
    password,
    phone,
    gender,
    address
  };

  localStorage.setItem("user", JSON.stringify(userData));
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
}

// Login validation
function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No user found. Please sign up first.");
    return;
  }

  if (savedUser.email === email && savedUser.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password.");
  }
}

// Display profile
function displayUserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!user || isLoggedIn !== "true") {
    alert("You must log in to view your profile.");
    window.location.href = "login.html";
    return;
  }

  document.getElementById("profileName").textContent = user.name;
  document.getElementById("profileEmail").textContent = user.email;
  document.getElementById("profilePhone").textContent = user.phone;
  document.getElementById("profileGender").textContent = user.gender;
  document.getElementById("profileAddress").textContent = user.address;
}

// Logout
function handleLogout() {
  localStorage.removeItem("isLoggedIn");
  alert("Logged out successfully!");
  window.location.href = "index.html";
}
