// Create a web page with a form that has two input fields: one for a username and one for a password.
// Validate the form before submission to ensure that the username is at least 5 characters long and the password is at least 8 characters long.

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validate username (at least 5 characters)
    if (username.length < 5) {
        document.getElementById('usernameError').textContent = 'Username must be at least 5 characters long.';
        isValid = false;
    }

    // Validate password (at least 8 characters)
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // If both fields are valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
    }
});
