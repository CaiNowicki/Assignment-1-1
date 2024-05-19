// Add an event listener to the element with the ID 'revealButton'
// This listener waits for a 'click' event and then executes
document.getElementById('revealButton').addEventListener('click', function() {
    
    // Get the element with the ID 'moreInfo'
    var moreInfo = document.getElementById('moreInfo');
    
    // Check if the 'display' property of the 'moreInfo' element's style is set to 'none'
    if (moreInfo.style.display === 'none') {
        // If it is 'none', change it to 'block' to make the element visible
        moreInfo.style.display = 'block';
    } else {
        // Otherwise, change it to 'none' to hide the element
        moreInfo.style.display = 'none';
    }
});
