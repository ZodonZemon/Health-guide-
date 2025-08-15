
// यह पूरा कोड script.js में पेस्ट करें
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('#project-filters .nav-link');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // अगर पहले से active है, दोबारा कुछ न करें (optional)
      if (this.classList.contains('active')) return;

      // Remove current active
      document.querySelector('#project-filters .nav-link.active').classList.remove('active');
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || filter === category) {
          item.classList.remove('hide');
          item.classList.remove('d-none');
        } else {
          item.classList.add('hide');
          // Timeout से पहले ही d-none ना हो, इससे animation दिखेगा
          setTimeout(() => {
            item.classList.add('d-none');
          }, 400);
        }
      });
    });
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".offcanvas .nav-link");
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        bsOffcanvas.hide();
      });
    });
  });

// Fade-in effect when hero slider images load
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('#heroCarousel img').forEach(img => {
    img.addEventListener('load', () => {
      img.setAttribute('data-loaded', 'true');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Bootstrap carousel autoplay is already controlled by data-bs-interval
  // If you want to force restart after user interaction:
  let heroCarousel = document.querySelector('#heroCarousel');
  let carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 5000, // 5 seconds per slide
    ride: 'carousel',
    pause: false,
    wrap: true
  });
});

document.querySelectorAll('#heroCarousel .zoomable').forEach(img => {
  img.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.stopPropagation(); // Allow pinch zoom without sliding carousel
    }
  }, { passive: false });
});