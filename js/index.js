document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Fetch input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simple validation
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }
  
    // In a real application, you would typically perform an AJAX request here to authenticate the user
    // For simplicity, just logging the input values to the console
    console.log("Username: " + username);
    console.log("Password: " + password);
  
    // Optionally, you can redirect the user to another page upon successful login
    // window.location.href = "dashboard.html";
  });
  