// Select all accordion toggle buttons
document.querySelectorAll('.accordion-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const accordionItem = button.parentElement;
      const isActive = accordionItem.classList.contains('active');
  
      // Toggle the active class
      accordionItem.classList.toggle('active');
    });
  });
