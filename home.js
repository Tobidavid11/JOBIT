document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchInput = document.getElementById("search-input");

  // Check if searchIcon and searchInput elements exist before adding event listeners
  if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", function () {
      window.location.href = "search.html"; // Navigate to search page
    });

    searchInput.addEventListener("click", function () {
      window.location.href = "search.html"; // Navigate to search page
    });
  } else {
    console.error("Search icon or search input not found.");
  }
});
