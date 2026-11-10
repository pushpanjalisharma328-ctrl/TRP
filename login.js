const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Login form submitted successfully!");
});