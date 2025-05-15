document.addEventListener('DOMContentLoaded', () => {
  // ─── Contact Form Logic ─────────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    // Combined form validation
    contactForm.addEventListener('submit', function(event) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === "") {
        alert("Please enter your name.");
        event.preventDefault();
        return;
      }
      if (!email || !message) {
        alert("Please fill out all fields.");
        event.preventDefault();
        return;
      }
      alert("Thank you for your message! I'll get back to you soon.");
    });

    // JavaScript-triggered animation for contact form
    const animateBtn = document.getElementById('animateFormButton');
    if (animateBtn) {
      animateBtn.addEventListener('click', () => {
        contactForm.style.animation = 'bounce 0.7s ease-in-out';
        contactForm.addEventListener('animationend', () => {
          contactForm.style.animation = '';
        }, { once: true });
      });
    }
  }

  // ─── Slider / Carousel Logic ─────────────────────────────────────────
  const slides = document.querySelectorAll('.slide');
  const sliderContainer = document.querySelector('.slider-container');
  const sliderEl = document.querySelector('.slider');

  if (slides.length && sliderContainer && sliderEl) {
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Expose moveSlide globally for inline onclick handlers
    window.moveSlide = function(direction) {
      currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
      sliderEl.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Auto-play: advance every 3 seconds
    let autoplay = setInterval(() => window.moveSlide(1), 3000);

    // Pause on hover
    sliderContainer.addEventListener('mouseenter', () => {
      clearInterval(autoplay);
    });
    sliderContainer.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => window.moveSlide(1), 3000);
    });
  }
});
