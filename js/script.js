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
     document.addEventListener('DOMContentLoaded', function () {
      const brandSection = document.querySelector('.brand-scroller-section');

      // Create an Intersection Observer to detect when the section enters the viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the 'visible' class when the section is in view
            brandSection.classList.add('visible');
          }
        });
      }, {
        threshold: 0.3 // Trigger when 30% of the element is visible
      });

      // Start observing the brand section
      observer.observe(brandSection);
    });
      document.addEventListener('DOMContentLoaded', function() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // For cards, add staggered animation
            if (entry.target.classList.contains('why-card')) {
              const cards = document.querySelectorAll('.why-card');
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('animate');
                }, index * 150);
              });
            }
          }
        });
      }, observerOptions);
      
      // Observe elements for animation
      const elementsToAnimate = [
        document.querySelector('.why-title'),
        document.querySelector('.why-desc'),
        document.querySelector('.cta-button')
      ];
      
      elementsToAnimate.forEach(el => {
        if (el) observer.observe(el);
      });
      
      // Observe cards
      const cards = document.querySelectorAll('.why-card');
      if (cards.length > 0) {
        observer.observe(cards[0]); // Observe first card to trigger all
      }
      
      // Observe stats
      const stats = document.querySelector('.why-stats');
      if (stats) observer.observe(stats);
    });
      document.querySelectorAll('.faq-question').forEach(function(btn){
      btn.addEventListener('click', function(){
        var item = btn.parentElement;
        var open = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if(!open) item.classList.add('open');
      });
    });

    // On-scroll animation for FAQ items
    function onScrollRevealFAQ() {
      var elements = document.querySelectorAll('.faq-item');
      var windowHeight = window.innerHeight;
      elements.forEach(function(el) {
        var rect = el.getBoundingClientRect();
        if(rect.top < windowHeight - 40) {
          el.classList.add('visible');
        }
      });
    }
    document.addEventListener('DOMContentLoaded', () => {
      onScrollRevealFAQ();
      window.addEventListener('scroll', onScrollRevealFAQ);
    });
     // Scroll animation for footer
    document.addEventListener('DOMContentLoaded', function() {
      const footer = document.getElementById('footer');
      
      function checkScroll() {
        const footerPosition = footer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if(footerPosition < screenPosition) {
          footer.classList.add('visible');
        }
      }
      
      window.addEventListener('scroll', checkScroll);
      // Check on page load in case footer is already in view
      checkScroll();
    });