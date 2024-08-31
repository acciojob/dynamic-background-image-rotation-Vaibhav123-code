//your JS code here. If required.
// Get the body element
const body = document.body;

// Define the portrait and landscape image URLs
const portraitImageUrl = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';
const landscapeImageUrl = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';

// Function to detect screen orientation
function detectOrientation() {
  if (window.innerWidth > window.innerHeight) {
    // Landscape mode
    body.style.backgroundImage = `url(${landscapeImageUrl})`;
  } else {
    // Portrait mode
    body.style.backgroundImage = `url(${portraitImageUrl})`;
  }
}

// Call the detectOrientation function on initial load
detectOrientation();

// Call the detectOrientation function on window resize
window.addEventListener('resize', detectOrientation);