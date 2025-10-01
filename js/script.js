    document.addEventListener('DOMContentLoaded', () => {
      // Navbar scroll effect
      const navbar = document.querySelector('.navbar');
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      });

      // Back to top
      const backToTopButton = document.querySelector('.back-to-top');
      window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('active', window.scrollY > 300);
      });
      backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

      // Mobile menu toggle
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      const mobileSidebar = document.querySelector('.mobile-sidebar');
      const mobileSidebarOverlay = document.querySelector('.mobile-sidebar-overlay');
      mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileSidebar.classList.toggle('active');
        mobileSidebarOverlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        if (isOpen) mobileSidebar.focus();
      });
      mobileSidebarOverlay.addEventListener('click', closeSidebar);
      function closeSidebar() {
        mobileSidebar.classList.remove('active');
        mobileSidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
      // Sidebar focus trap for accessibility
      mobileSidebar.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeSidebar();
        const focusableEls = mobileSidebar.querySelectorAll('a, button');
        const firstEl = focusableEls[0], lastEl = focusableEls[focusableEls.length - 1];
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstEl) {
            e.preventDefault(); lastEl.focus();
          }
          if (!e.shiftKey && document.activeElement === lastEl) {
            e.preventDefault(); firstEl.focus();
          }
        }
      });

      // Book card z-index interaction
      document.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.zIndex = '10');
        card.addEventListener('mouseleave', () => card.style.zIndex = '1');
      });

      // Ripple effect for buttons
      document.querySelectorAll('.hero-btn, .cta-btn, .book-btn').forEach(button => {
        button.addEventListener('click', function(e) {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left, y = e.clientY - rect.top;
          const ripple = document.createElement('span');
          ripple.className = 'ripple';
          ripple.style.left = `${x}px`;
          ripple.style.top = `${y}px`;
          ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
          button.appendChild(ripple);
          setTimeout(() => ripple.remove(), 600);
        });
      });

      // Particle animation
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          const size = Math.random() * 32 + 10;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 16}s`;
          particle.style.animationDuration = `${Math.random() * 12 + 8}s`;
          particlesContainer.appendChild(particle);
        }
      }

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            // Close mobile sidebar if open
            closeSidebar();
          }
        });
      });

      // Focus management for accessibility
      document.querySelectorAll('.book-card, .feature-card').forEach(card => {
        card.addEventListener('focus', () => {
          document.querySelectorAll('.book-card, .feature-card').forEach(otherCard => {
            if (otherCard !== card) {
              otherCard.style.zIndex = '1';
            }
          });
          card.style.zIndex = '10';
        });
      });

      // Add loading state to buttons
      document.querySelectorAll('.hero-btn, .cta-btn, .book-btn').forEach(button => {
        button.addEventListener('click', function(e) {
          if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            // Simulate loading state
            setTimeout(() => {
              this.classList.remove('loading');
              this.innerHTML = this.dataset.originalText || 'Purchase Complete!';
              
              // Reset button text after 2 seconds
              setTimeout(() => {
                if (this.classList.contains('book-btn')) {
                  this.innerHTML = this.dataset.originalText || 'Buy Now';
                } else if (this.classList.contains('hero-btn')) {
                  this.innerHTML = this.dataset.originalText || 'Browse Ebooks';
                } else {
                  this.innerHTML = this.dataset.originalText || 'Shop Now';
                }
              }, 2000);
            }, 1500);
          }
        });

        // Store original text
        button.dataset.originalText = button.textContent;
      });

      // Keyboard navigation for book cards
      document.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.querySelector('.book-btn')?.click();
          }
        });
      });

      // Performance optimization: Debounce scroll events
      let scrollTimer;
      window.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          // Scroll-based animations could go here
        }, 10);
      });

      // Add fade-in animation for elements on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe elements for fade-in
      document.querySelectorAll('.feature-card, .book-card, .about-content, .cta-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });

      // Preload critical images
      function preloadImage(url) {
        const img = new Image();
        img.src = url;
      }

      // Preload hero image
      preloadImage('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80');

      // Add error handling for images
      document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
          this.alt = 'Image not available';
          this.style.backgroundColor = '#f8fafc';
          this.style.display = 'flex';
          this.style.alignItems = 'center';
          this.style.justifyContent = 'center';
          this.style.color = '#666';
          this.innerHTML = '<span>Image not available</span>';
        });
      });

      // Initialize AOS (Animation On Scroll)-like functionality
      function checkScroll() {
        const windowHeight = window.innerHeight;
        const elements = document.querySelectorAll('.feature-card, .book-card, .about-content, .cta-content');
        
        elements.forEach(element => {
          const position = element.getBoundingClientRect().top;
          
          if (position < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
        });
      }

      // Initial check
      checkScroll();
      window.addEventListener('scroll', checkScroll);

      // Add touch support for mobile devices
      let touchStartX = 0;
      let touchEndX = 0;

      document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
      });

      document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      });

      function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold && mobileSidebar.classList.contains('active')) {
          closeSidebar();
        }
      }

      // Enhanced focus styles for accessibility
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });

      // Add CSS for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        body.keyboard-navigation button:focus,
        body.keyboard-navigation a:focus {
          outline: 3px solid var(--purple-darker) !important;
          outline-offset: 2px;
        }
        
        .loading {
          pointer-events: none;
          opacity: 0.8;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);

      console.log('Alphagon website initialized successfully!');
    });

    // Service Worker registration for PWA capabilities (optional)
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Performance monitoring
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);
      
      if (loadTime > 3000) {
        console.warn('Page load time is above 3 seconds. Consider optimizing assets.');
      }
    });
