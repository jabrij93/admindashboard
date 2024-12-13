// script3.js
const hamburgerButton = document.querySelector('.toggle-sidebar-btn'); // Updated to match class name
const closeButton = document.querySelector('.close-btn'); // Updated to match class name
const sidebar = document.querySelector('.sidebar'); // Updated to match class name

// Toggle sidebar visibility
const toggleSidebar = (isOpening) => {
  sidebar.classList.toggle('open', isOpening); // Add 'open' class when opening
  hamburgerButton.classList.toggle('hidden', isOpening); // Hide hamburger when open
};

// Open the sidebar when the hamburger button is clicked
hamburgerButton.addEventListener('click', () => {
  console.log('Hamburger clicked!');
  toggleSidebar(true);
});

// Close the sidebar when the close button is clicked
closeButton.addEventListener('click', () => {
  console.log('Close button clicked!');
  toggleSidebar(false);
});