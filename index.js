// index.js
document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main-content');
  const navLinks = document.querySelectorAll('nav a');

  // Load initial page on page load
  loadPage('page1');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const pageId = link.getAttribute('data-page');
      loadPage(pageId);
    });
  });

  function loadPage(pageId) {
    // Fetch the page content from JSON data
    fetch('pages.json')
      .then(response => response.json())
      .then(data => {
        const page = data[pageId];
        if (page) {
          mainContent.innerHTML = page.html;
        } else {
          mainContent.innerHTML = '<p>Page not found</p>';
        }
      })
      .catch(error => {
        console.error('Error loading page:', error);
        mainContent.innerHTML = '<p>Unable to load the page</p>';
      });
  }
});
