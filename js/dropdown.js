// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Dropdown script loaded');
  const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
  console.log('Found dropdowns:', dropdownToggles.length);
  
  dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Dropdown clicked');
      
      const dropdown = this.closest('.nav-dropdown');
      const isOpen = dropdown.classList.contains('w--open');
      console.log('Dropdown is open:', isOpen);
      
      // Close all other dropdowns
      document.querySelectorAll('.nav-dropdown').forEach(function(dd) {
        dd.classList.remove('w--open');
      });
      
      // Toggle current dropdown
      if (!isOpen) {
        dropdown.classList.add('w--open');
        console.log('Opening dropdown');
      }
    });
    
    // Also add hover functionality
    const dropdown = toggle.closest('.nav-dropdown');
    dropdown.addEventListener('mouseenter', function() {
      this.classList.add('w--open');
    });
    
    dropdown.addEventListener('mouseleave', function() {
      this.classList.remove('w--open');
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(function(dropdown) {
        dropdown.classList.remove('w--open');
      });
    }
  });
  
  // Close dropdown when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown').forEach(function(dropdown) {
        dropdown.classList.remove('w--open');
      });
    }
  });
}); 