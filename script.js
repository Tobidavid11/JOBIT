document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[index].style.display = "block";
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 5000);

  const menuToggle = document.getElementById("menu-toggle");
  const navRight = document.querySelector(".nav-right");

  menuToggle.addEventListener("click", function () {
    navRight.classList.toggle("show");
    // Toggle the icon between hamburger and close
    const icons = menuToggle.querySelectorAll(".icon");
    icons.forEach((icon) => icon.classList.toggle("hidden"));
  });
});
