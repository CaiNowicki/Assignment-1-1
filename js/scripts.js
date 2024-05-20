// Get the login button and hover text elements by their IDs
var loginButton = document.getElementById('loginButton');
var hoverText = document.getElementById('hoverText');
// Select all images from the page
var images = document.querySelectorAll('.resized-image')

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



images.forEach(function(image) {
    // add check for mouseover to each image
    image.addEventListener('mouseover', function(event) {
        // if yes, get alt text
        var altText = event.target.alt || 'No Image ID available'; //fetch alt text or use default
        hoverText.textContent = altText;
        hoverText.style.display = 'block';
    }
);
// check for mouseout on each image
image.addEventListener('mouseout', function() {
    // mouse moves off, hide alt text
    hoverText.style.display = 'none';
});
});