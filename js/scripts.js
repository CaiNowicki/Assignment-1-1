// Get the login button and hover text elements by their IDs
var loginButton = document.getElementById('loginButton');
var hoverText = document.getElementById('hoverText');

// Add event listener for mouseover event on the login button
loginButton.addEventListener('mouseover', function() {
    // Display the hover text when the mouse is over the button
    hoverText.style.display = 'block';
});

// Add event listener for mouseout event on the login button
loginButton.addEventListener('mouseout', function() {
    // Hide the hover text when the mouse leaves the button
    hoverText.style.display = 'none';
});
