// About page scroll reveal animations
(function() {
  // Only run on about page
  if (!document.querySelector('.about-scroll-container')) {
    return;
  }

  const scrollContainer = document.querySelector('.about-scroll-container');
  const jobSections = document.querySelectorAll('.about-job');
  
  // Function to check if section is in view
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    
    // Check if element is visible in the scroll container
    return (
      rect.top >= containerRect.top &&
      rect.top <= containerRect.top + containerRect.height * 0.6
    );
  }

  // Function to handle scroll
  function handleScroll() {
    jobSections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('visible');
      }
    });
  }

  // Initial check on load
  handleScroll();

  // Listen for scroll events
  scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

  // Also check on resize
  window.addEventListener('resize', handleScroll, { passive: true });
})();

