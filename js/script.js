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
      document.addEventListener('DOMContentLoaded', function() {
      // Intersection Observer for scroll animations
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, observerOptions);
      
      // Observe each bonus card
      const bonusCards = document.querySelectorAll('.bonus-card');
      bonusCards.forEach((card, index) => {
        // Stagger the animation delay
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
      
      // Add subtle hover effect to the entire section
      const bonusesSection = document.querySelector('.bonuses-section');
      bonusesSection.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
      });
      
      bonusesSection.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
      
      // Add CSS transition for smooth transform
      bonusesSection.style.transition = 'transform 0.3s ease';
    });
     const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);
    
    // Observe elements for animation
    document.addEventListener('DOMContentLoaded', () => {
      const elementsToAnimate = [
        document.querySelector('.instructor-photo-box'),
        document.querySelector('.instructor-content'),
        document.querySelector('.journey-section'),
        document.querySelector('.journey-cta')
      ];
      
      // Add fact cards and journey steps to the list
      const factCards = document.querySelectorAll('.fact-card');
      const journeySteps = document.querySelectorAll('.journey-step');
      
      elementsToAnimate.forEach(el => {
        if (el) observer.observe(el);
      });
      
      factCards.forEach(card => {
        observer.observe(card);
      });
      
      journeySteps.forEach(step => {
        observer.observe(step);
      });
      
      // Add click functionality to CTA
      const cta = document.querySelector('.journey-cta');
      if (cta) {
        cta.addEventListener('click', () => {
          alert("I learned that a focused 3-book platform outperforms scattered content strategies. By concentrating on just three high-quality books, authors can build a stronger brand, create better marketing funnels, and establish authority in their niche more effectively than with a single book or dozens of titles.");
        });
      }
    });