document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Fetch input values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    // Simple validation
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // In a real application, you would typically perform an AJAX request here to register the user
    // For simplicity, just logging the input values to the console
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
  
    // Optionally, you can redirect the user to another page upon successful registration
    // window.location.href = "login.html";
  });
  