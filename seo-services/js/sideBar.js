function showContent(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section-seo-content > div');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }

  // Prevent default anchor behavior
  return false;
}

// Attach event listeners to the menu items
document.querySelectorAll('.section-seo-sidebar a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    showContent(this.getAttribute('onclick').match(/'([^']+)'/)[1]);
  });

  anchor.addEventListener('mouseover', function(event) {
    showContent(this.getAttribute('onclick').match(/'([^']+)'/)[1]);
  });
});