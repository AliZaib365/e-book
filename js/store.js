    // Enhanced e-book products with more details
    const allProducts = [
      {
        id: 1,
        title: "The Ultimate E-Book Launch Blueprint",
        price: 39.00,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=480&q=80",
        category: "marketing",
        rating: 4.8,
        badge: "Bestseller"
      },
      {
        id: 2,
        title: "Content Marketing for E-Books",
        price: 27.00,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=480&q=80",
        category: "marketing",
        rating: 4.5,
        badge: "Popular"
      },
      {
        id: 3,
        title: "Passive Income with Digital Publishing",
        price: 47.00,
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?fit=crop&w=480&q=80",
        category: "publishing",
        rating: 4.9,
        badge: "New"
      },
      {
        id: 4,
        title: "Email List Growth for Authors",
        price: 19.00,
        image: "https://images.unsplash.com/photo-1510414696678-2415ad8474aa?fit=crop&w=480&q=80",
        category: "marketing",
        rating: 4.3,
        badge: "Sale"
      },
      {
        id: 5,
        title: "E-Book Funnel Templates & Swipe Files",
        price: 33.00,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=480&q=80",
        category: "marketing",
        rating: 4.7
      },
      {
        id: 6,
        title: "Self-Publishing Success Guide",
        price: 59.00,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=480&q=80",
        category: "publishing",
        rating: 4.6,
        badge: "Premium"
      },
      {
        id: 7,
        title: "Social Media Growth for E-Books",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=480&q=80",
        category: "marketing",
        rating: 4.4
      },
      {
        id: 8,
        title: "KDP Profits Masterclass",
        price: 44.00,
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?fit=crop&w=480&q=80",
        category: "publishing",
        rating: 4.9,
        badge: "Hot"
      },
      {
        id: 9,
        title: "Evergreen Email Marketing for Authors",
        price: 29.00,
        image: "https://images.unsplash.com/photo-1510414696678-2415ad8474aa?fit=crop&w=480&q=80",
        category: "marketing",
        rating: 4.5
      },
      {
        id: 10,
        title: "AI Tools for E-Book Creation",
        price: 39.00,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=480&q=80",
        category: "publishing",
        rating: 4.7,
        badge: "Trending"
      },
      {
        id: 11,
        title: "Book Cover Design Workshop",
        price: 37.00,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=480&q=80",
        category: "design",
        rating: 4.8
      },
      {
        id: 12,
        title: "Digital Products: Upsell Secrets",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=480&q=80",
        category: "marketing",
        rating: 4.6
      },
      {
        id: 13,
        title: "E-Book SEO & Amazon Ranking",
        price: 22.00,
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?fit=crop&w=480&q=80",
        category: "seo",
        rating: 4.4,
        badge: "Sale"
      },
      {
        id: 14,
        title: "E-Book Store Starter Kit",
        price: 49.00,
        image: "https://images.unsplash.com/photo-1510414696678-2415ad8474aa?fit=crop&w=480&q=80",
        category: "publishing",
        rating: 4.7
      },
      {
        id: 15,
        title: "Instagram Growth for Authors",
        price: 26.00,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=480&q=80",
        category: "marketing",
        rating: 4.3
      },
      {
        id: 16,
        title: "E-Book Launch Checklist",
        price: 17.00,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=480&q=80",
        category: "publishing",
        rating: 4.2,
        badge: "Freebie"
      },
      {
        id: 17,
        title: "Sales Page Copywriting for E-Books",
        price: 41.00,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=480&q=80",
        category: "marketing",
        rating: 4.8
      },
      {
        id: 18,
        title: "Ultimate Bundle: Author's Power Kit",
        price: 97.00,
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?fit=crop&w=480&q=80",
        category: "publishing",
        rating: 5.0,
        badge: "Bundle"
      }
    ];

    // Cart state
    let cart = [];
    
    // State management
    const state = {
      currentPage: 1,
      products: [...allProducts],
      sortBy: "popularity",
      searchQuery: "",
      categoryFilter: "all",
      minPrice: null,
      maxPrice: null,
      ratingFilter: "all",
      perPage: 6
    };

    // DOM elements
    const elements = {
      productGrid: document.getElementById('productGrid'),
      pagination: document.getElementById('pagination'),
      resultsMeta: document.getElementById('results-meta'),
      sortSelect: document.getElementById('sortSelect'),
      searchInput: document.getElementById('searchInput'),
      categoryFilter: document.getElementById('categoryFilter'),
      minPrice: document.getElementById('minPrice'),
      maxPrice: document.getElementById('maxPrice'),
      ratingFilter: document.getElementById('ratingFilter'),
      resetFilters: document.getElementById('resetFilters'),
      loadingSpinner: document.getElementById('loadingSpinner'),
      emptyState: document.getElementById('emptyState'),
      resetEmptyState: document.getElementById('resetEmptyState'),
      cartIcon: document.getElementById('cartIcon'),
      cartCount: document.getElementById('cartCount'),
      cartContainer: document.getElementById('cartContainer'),
      closeCart: document.getElementById('closeCart'),
      cartItems: document.getElementById('cartItems'),
      cartTotal: document.getElementById('cartTotal'),
      checkoutBtn: document.getElementById('checkoutBtn'),
      cartNotification: document.getElementById('cartNotification')
    };

    // Initialize the page
    function init() {
      renderProducts();
      renderPagination();
      setupEventListeners();
      setupScrollAnimations();
      loadCartFromStorage();
      updateCartUI();
    }

    // Set up event listeners
    function setupEventListeners() {
      elements.sortSelect.addEventListener('change', function() {
        state.sortBy = this.value;
        state.currentPage = 1;
        filterAndSortProducts();
      });

      elements.searchInput.addEventListener('input', function() {
        state.searchQuery = this.value.toLowerCase();
        state.currentPage = 1;
        filterAndSortProducts();
      });

      elements.categoryFilter.addEventListener('change', function() {
        state.categoryFilter = this.value;
        state.currentPage = 1;
        filterAndSortProducts();
      });

      elements.minPrice.addEventListener('input', function() {
        state.minPrice = this.value ? parseFloat(this.value) : null;
        state.currentPage = 1;
        filterAndSortProducts();
      });

      elements.maxPrice.addEventListener('input', function() {
        state.maxPrice = this.value ? parseFloat(this.value) : null;
        state.currentPage = 1;
        filterAndSortProducts();
      });

      elements.ratingFilter.addEventListener('change', function() {
        state.ratingFilter = this.value;
        state.currentPage = 1;
        filterAndSortProducts();
      });

      elements.resetFilters.addEventListener('click', resetFilters);
      elements.resetEmptyState.addEventListener('click', resetFilters);
      
      // Cart event listeners
      elements.cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        openCart();
      });
      
      elements.closeCart.addEventListener('click', closeCart);
      elements.checkoutBtn.addEventListener('click', checkout);
    }

    // Cart functionality
    function openCart() {
      elements.cartContainer.classList.add('open');
    }
    
    function closeCart() {
      elements.cartContainer.classList.remove('open');
    }
    
    function addToCart(productId) {
      const product = allProducts.find(p => p.id === parseInt(productId));
      if (!product) return;
      
      // Check if product is already in cart
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          ...product,
          quantity: 1
        });
      }
      
      // Save to localStorage
      saveCartToStorage();
      
      // Update UI
      updateCartUI();
      
      // Show notification
      showCartNotification(product.title);
      
      // Visual feedback on button
      const button = document.querySelector(`.add-to-cart-btn[data-id="${productId}"]`);
      const originalText = button.innerHTML;
      button.innerHTML = '<i class="fas fa-check"></i> Added!';
      button.classList.add('added');
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('added');
      }, 2000);
    }
    
    function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      saveCartToStorage();
      updateCartUI();
    }
    
    function updateQuantity(productId, change) {
      const item = cart.find(item => item.id === productId);
      if (!item) return;
      
      item.quantity += change;
      
      if (item.quantity <= 0) {
        removeFromCart(productId);
      } else {
        saveCartToStorage();
        updateCartUI();
      }
    }
    
    function updateCartUI() {
      // Update cart count
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      elements.cartCount.textContent = totalItems;
      
      // Update cart items
      elements.cartItems.innerHTML = '';
      
      if (cart.length === 0) {
        elements.cartItems.innerHTML = `
          <div class="empty-cart">
            <i class="fas fa-shopping-cart"></i>
            <p>Your cart is empty</p>
          </div>
        `;
        elements.cartTotal.textContent = '$0.00';
        return;
      }
      
      let total = 0;
      
      cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="cart-item-details">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="cart-item-actions">
              <button class="quantity-btn minus" data-id="${item.id}">-</button>
              <span class="cart-item-quantity">${item.quantity}</span>
              <button class="quantity-btn plus" data-id="${item.id}">+</button>
              <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        `;
        
        elements.cartItems.appendChild(cartItem);
        
        // Add event listeners to cart item buttons
        cartItem.querySelector('.minus').addEventListener('click', function() {
          updateQuantity(item.id, -1);
        });
        
        cartItem.querySelector('.plus').addEventListener('click', function() {
          updateQuantity(item.id, 1);
        });
        
        cartItem.querySelector('.remove-item').addEventListener('click', function() {
          removeFromCart(item.id);
        });
      });
      
      // Update total
      elements.cartTotal.textContent = `$${total.toFixed(2)}`;
    }
    
    function showCartNotification(productTitle) {
      elements.cartNotification.querySelector('span').textContent = `${productTitle} added to cart!`;
      elements.cartNotification.classList.add('show');
      
      setTimeout(() => {
        elements.cartNotification.classList.remove('show');
      }, 3000);
    }
    
    function checkout() {
      if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }
      
      alert('Thank you for your purchase! This is a demo store.');
      cart = [];
      saveCartToStorage();
      updateCartUI();
      closeCart();
    }
    
    function saveCartToStorage() {
      localStorage.setItem('ebookStoreCart', JSON.stringify(cart));
    }
    
    function loadCartFromStorage() {
      const savedCart = localStorage.getItem('ebookStoreCart');
      if (savedCart) {
        cart = JSON.parse(savedCart);
      }
    }

    // Reset all filters
    function resetFilters() {
      state.searchQuery = "";
      state.categoryFilter = "all";
      state.minPrice = null;
      state.maxPrice = null;
      state.ratingFilter = "all";
      state.currentPage = 1;
      
      elements.searchInput.value = "";
      elements.categoryFilter.value = "all";
      elements.minPrice.value = "";
      elements.maxPrice.value = "";
      elements.ratingFilter.value = "all";
      
      filterAndSortProducts();
    }

    // Filter and sort products based on current state
    function filterAndSortProducts() {
      // Show loading state
      elements.loadingSpinner.style.display = 'block';
      elements.emptyState.style.display = 'none';
      
      // Simulate API call delay
      setTimeout(() => {
        let filteredProducts = [...allProducts];
        
        // Apply search filter
        if (state.searchQuery) {
          filteredProducts = filteredProducts.filter(product => 
            product.title.toLowerCase().includes(state.searchQuery)
          );
        }
        
        // Apply category filter
        if (state.categoryFilter !== "all") {
          filteredProducts = filteredProducts.filter(product => 
            product.category === state.categoryFilter
          );
        }
        
        // Apply price filter
        if (state.minPrice !== null) {
          filteredProducts = filteredProducts.filter(product => 
            product.price >= state.minPrice
          );
        }
        
        if (state.maxPrice !== null) {
          filteredProducts = filteredProducts.filter(product => 
            product.price <= state.maxPrice
          );
        }
        
        // Apply rating filter
        if (state.ratingFilter !== "all") {
          const minRating = parseFloat(state.ratingFilter);
          filteredProducts = filteredProducts.filter(product => 
            product.rating >= minRating
          );
        }
        
        // Apply sorting
        sortProducts(filteredProducts);
        
        state.products = filteredProducts;
        state.currentPage = 1;
        
        renderProducts();
        renderPagination();
        
        // Hide loading state
        elements.loadingSpinner.style.display = 'none';
        
        // Show empty state if no products
        if (state.products.length === 0) {
          elements.emptyState.style.display = 'block';
        }
      }, 500);
    }

    // Sort products based on current sort option
    function sortProducts(products) {
      switch(state.sortBy) {
        case "price-low":
          products.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          products.sort((a, b) => b.price - a.price);
          break;
        case "az":
          products.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "za":
          products.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "popularity":
        default:
          // Keep original order (simulating popularity)
          break;
      }
    }

    // Render products to the grid
    function renderProducts() {
      const start = (state.currentPage - 1) * state.perPage;
      const end = start + state.perPage;
      const paginated = state.products.slice(start, end);
      
      elements.productGrid.innerHTML = '';
      
      if (paginated.length === 0) {
        elements.emptyState.style.display = 'block';
        return;
      }
      
      paginated.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.transitionDelay = `${index * 0.05}s`;
        
        let badgeHtml = '';
        if (product.badge) {
          badgeHtml = `<div class="product-badge">${product.badge}</div>`;
        }
        
        productCard.innerHTML = `
          <div class="product-image-container">
            <img class="product-image" src="${product.image}" alt="${product.title}" loading="lazy">
            ${badgeHtml}
          </div>
          <div class="product-title">${product.title}</div>
          <div class="product-price">$${product.price.toFixed(2)}</div>
          <button class="add-to-cart-btn" data-id="${product.id}">
            <i class="fas fa-shopping-cart"></i> Add to cart
          </button>
        `;
        
        elements.productGrid.appendChild(productCard);
        
        // Add to cart functionality
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', function() {
          const productId = this.getAttribute('data-id');
          addToCart(productId);
        });
      });
      
      // Update results meta
      elements.resultsMeta.textContent = 
        `Showing ${start + 1}–${Math.min(end, state.products.length)} of ${state.products.length} results`;
      
      // Trigger animations after a short delay
      setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
          card.classList.add('animate');
        });
      }, 100);
    }

    // Render pagination controls
    function renderPagination() {
      const totalPages = Math.ceil(state.products.length / state.perPage);
      elements.pagination.innerHTML = '';
      
      if (totalPages <= 1) return;
      
      // Previous button
      if (state.currentPage > 1) {
        elements.pagination.innerHTML += 
          `<button class="pagination-btn" data-page="${state.currentPage - 1}">
            <i class="fas fa-chevron-left"></i> Prev
          </button>`;
      }
      
      // Page numbers
      for (let i = 1; i <= totalPages; i++) {
        elements.pagination.innerHTML += 
          `<button class="pagination-btn${i === state.currentPage ? ' active' : ''}" data-page="${i}">${i}</button>`;
      }
      
      // Next button
      if (state.currentPage < totalPages) {
        elements.pagination.innerHTML += 
          `<button class="pagination-btn" data-page="${state.currentPage + 1}">
            Next <i class="fas fa-chevron-right"></i>
          </button>`;
      }
      
      // Add event listeners to pagination buttons
      document.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          state.currentPage = parseInt(this.getAttribute('data-page'));
          renderProducts();
          renderPagination();
          window.scrollTo({top: 0, behavior: 'smooth'});
        });
      });
    }

    // Set up scroll animations
    function setupScrollAnimations() {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, observerOptions);
      
      // Observe product cards for animation
      document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.product-card').forEach(card => {
          observer.observe(card);
        });
      });
    }

    // Sidebar functions
    function openSidebar() {
      document.getElementById('sidebar').classList.add('open');
    }
    
    function closeSidebar() {
      document.getElementById('sidebar').classList.remove('open');
    }

    // Initialize the application
    document.addEventListener('DOMContentLoaded', init);
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
    });``
    document.addEventListener('DOMContentLoaded', function() {
      const contactForm = document.getElementById('contactForm');
      const toastContainer = document.getElementById('toastContainer');
      
      // Function to show toast notification
      function showToast(title, message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const iconClass = type === 'success' ? 'fa-check' : 'fa-exclamation';
        
        toast.innerHTML = `
          <div class="toast-icon">
            <i class="fas ${iconClass}"></i>
          </div>
          <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
          </div>
          <button class="toast-close">
            <i class="fas fa-times"></i>
          </button>
        `;
        
        toastContainer.appendChild(toast);
        
        // Show the toast with animation
        setTimeout(() => {
          toast.classList.add('show');
        }, 10);
        
        // Auto remove toast after 5 seconds
        const autoRemove = setTimeout(() => {
          hideToast(toast);
        }, 5000);
        
        // Close button functionality
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
          clearTimeout(autoRemove);
          hideToast(toast);
        });
      }
      
      // Function to hide toast with animation
      function hideToast(toast) {
        toast.classList.remove('show');
        setTimeout(() => {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 400);
      }
      
      // Form submission handler
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const firstName = document.getElementById('firstName').value;
        const email = document.getElementById('email').value;
        
        // Simple validation
        if (!firstName || !email) {
          showToast(
            'Missing Information', 
            'Please fill in all required fields.', 
            'error'
          );
          return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
          // Show success toast
          showToast(
            'Message Sent Successfully!', 
            'Thank you for your message. We will get back to you soon.', 
            'success'
          );
          
          // Reset form
          contactForm.reset();
          
          // Reset button
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 2000);
      });
      
      // Add input validation feedback
      const requiredInputs = contactForm.querySelectorAll('input[required]');
      requiredInputs.forEach(input => {
        input.addEventListener('blur', function() {
          if (!this.value) {
            this.style.borderColor = 'var(--error-color)';
          } else {
            this.style.borderColor = 'var(--success-color)';
          }
        });
      });
    });
    document.addEventListener('DOMContentLoaded', function () {
      // Scroll animation observer
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');

            // Animate stats counting
            if (entry.target.id === 'stats') {
              animateStats();
            }
          }
        });
      }, observerOptions);

      // Observe all animated elements
      const animatedElements = document.querySelectorAll('.section-title, .section-subtitle, .ceo-container, .stats-container, .mission-container, .values-container, .team-container, .cta-title, .cta-description, .cta-button');
      animatedElements.forEach(el => {
        observer.observe(el);
      });

      // Stats counting animation
      function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');

        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          const duration = 2000; // 2 seconds
          const step = target / (duration / 16); // 60fps
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }

            // Format number with commas
            stat.textContent = Math.floor(current).toLocaleString();
          }, 16);
        });
      }

      // Smooth scrolling for navigation
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Parallax effect for hero section
      window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const hero = document.getElementById('hero');
        if (hero) {
          hero.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
        }
      });
    });