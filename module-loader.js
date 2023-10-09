export async function loadPage(pageName, container) {
  try {
    const module = await import(`./${pageName}.js`);
    const page = module.default; // Assuming the exported module has a default export

    container.innerHTML = ''; // Clear the container
    container.appendChild(page.render()); // Render the page content

    if (typeof page.init === 'function') {
      page.init(); // Initialize the page-specific JavaScript logic
    }
  } catch (error) {
    console.error('Error loading page:', error);
    container.innerHTML = '<p>Unable to load the page</p>';
  }
}
