// Add custom cursor effects from external JS file if desired
// Here we're using an external cursor effect script
var script = document.createElement('script');
script.src = 'https://assets.guns.lol/cursor-effects.js'; // Include the custom cursor effects script
document.body.appendChild(script);

// Simple interaction example: Change profile text on click
document.getElementById('profile').addEventListener('click', function() {
    alert('Profile clicked!');
});
