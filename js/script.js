    function openSidebar() {
      document.getElementById('sidebar').classList.add('open');
    }
    function closeSidebar() {
      document.getElementById('sidebar').classList.remove('open');
    }
    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScrollTop = scrollTop;
    });
    // Add active class to current navbar item
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      });
    });
    // Video functionality
    const videoOverlay = document.getElementById('videoOverlay');
    const videoPlayer = document.getElementById('videoPlayer');
    videoOverlay.addEventListener('click', function() {
      videoOverlay.classList.add('hidden');
      const currentSrc = videoPlayer.src;
      if (!currentSrc.includes('autoplay=1')) {
        const separator = currentSrc.includes('?') ? '&' : '?';
        videoPlayer.src = currentSrc + separator + 'autoplay=1';
      }
      videoPlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
  function revealOnScroll() {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const windowHeight = window.innerHeight;
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 60) {
          el.classList.add('visible');
        }
      });
    }
    // Initial check and on scroll
    document.addEventListener('DOMContentLoaded', () => {
      revealOnScroll();
      window.addEventListener('scroll', revealOnScroll);
    });
     document.addEventListener('DOMContentLoaded', function () {
      const cards = document.querySelectorAll('.who1-card');

      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
          rect.bottom >= 0
        );
      }

      function handleScrollAnimation() {
        cards.forEach((card, index) => {
          if (isInViewport(card)) {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 100);
          }
        });
      }

      handleScrollAnimation();

      let ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(function () {
            handleScrollAnimation();
            ticking = false;
          });
          ticking = true;
        }
      });
    });