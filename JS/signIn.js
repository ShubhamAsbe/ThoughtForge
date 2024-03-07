// signin.js

function signIn() {
    // Get the input values
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    // Perform your login validation logic (replace this with your actual logic)
    if (isValidLogin(username, password)) {
        // Redirect to the next page if login is correct
        window.location.href = 'index.html'; // Update with the correct page URL
    } else {
        // Show an error message for incorrect login
        alert('Incorrect username or password. Please try again.');
    }
}

function isValidLogin(username, password) {
    // Replace this with your actual login validation logic
    // For example, you might check credentials against a database
    // For simplicity, let's assume a hardcoded username and password
    const correctUsername = 'ThoughtForge';
    const correctPassword = 'ThoughtForge';

    return username === correctUsername && password === correctPassword;
}


function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const eyeIcon = document.querySelector('.eye-icon');

    // Toggle the type attribute of the password input
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = '<img src="../IMG/EyeOpen.png" alt="Toggle Password Visibility" width="20" height="20">';
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = '<img src="../IMG/EyeClose.png" alt="Toggle Password Visibility" width="20" height="20">';
    }
}