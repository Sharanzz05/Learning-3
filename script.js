let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Auto-switch slides every 40 seconds
function autoSwitchSlides() {
  setInterval(() => {
    nextSlide();
  }, 40000); // 40 seconds per slide
}

// Function to move to the next slide
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Surprise action for the final slide
function showSurprise() {
  alert("🎉 You're the best! Happy Birthday! 🎉");
}

// Start auto-switching when the page loads
autoSwitchSlides();
