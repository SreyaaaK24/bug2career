function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // Show loading overlay
    document.getElementById('loadingOverlay').style.display = 'flex'; 

    // Simulating login validation
    setTimeout(function() {
        if (emailInput === correctEmail && passwordInput === correctPassword) {
            document.getElementById('loadingOverlay').style.display = 'none'; // Hide loading overlay
            window.location.href = "index.html"; // Redirect to index.html on successful login
        } else {
            document.getElementById('loadingOverlay').style.display = 'none'; // Hide loading overlay
            document.getElementById('error-message').innerText = "Incorrect email or password. Please try again."; // Show error message
            document.getElementById('error-message').style.display = 'block'; // Display error message
        }
    }, 2000); // Simulate a delay for demonstration (2 seconds)
}