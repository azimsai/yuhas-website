// ===================================
// Navigation & Scroll Behavior
// ===================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('back-to-top');

// Sticky navbar on scroll
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for styling
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (currentScroll > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================

const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink(); // Call on page load

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Back to Top Button
// ===================================

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Scroll Animations (Intersection Observer)
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe all elements with scroll-animate class
const animateElements = document.querySelectorAll('.glass-card, .service-card, .project-card, .benefit-item, .testimonial-card, .info-item');

animateElements.forEach(element => {
    element.classList.add('scroll-animate');
    observer.observe(element);
});

// ===================================
// Contact Form Validation & Submission
// ===================================

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        showFormStatus('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual backend call)
    try {
        showFormStatus('Sending message...', 'info');
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In production, you would send data to your backend:
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, phone, service, message })
        // });
        
        showFormStatus('Thank you! Your message has been sent successfully. We\'ll contact you soon.', 'success');
        contactForm.reset();
        
    } catch (error) {
        showFormStatus('Oops! Something went wrong. Please try again later.', 'error');
        console.error('Form submission error:', error);
    }
});

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    
    // Clear status after 5 seconds for non-success messages
    if (type !== 'success') {
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    }
}

// ===================================
// Newsletter Form Handling
// ===================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate subscription
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        } catch (error) {
            alert('Subscription failed. Please try again.');
            console.error('Newsletter subscription error:', error);
        }
    });
}

// ===================================
// Lazy Loading Images
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// Performance: Debounced Resize Handler
// ===================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const handleResize = debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}, 250);

window.addEventListener('resize', handleResize);

// ===================================
// Page Load Animations
// ===================================

window.addEventListener('load', () => {
    // Add loaded class to body for any additional load animations
    document.body.classList.add('loaded');
    
    // Trigger initial scroll animations for elements in viewport
    updateActiveLink();
});

// ===================================
// Accessibility Enhancements
// ===================================

// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Focus trap for mobile menu
const focusableElements = 'a[href], button, textarea, input, select';
let firstFocusableElement;
let lastFocusableElement;

hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        const focusableContent = navMenu.querySelectorAll(focusableElements);
        firstFocusableElement = focusableContent[0];
        lastFocusableElement = focusableContent[focusableContent.length - 1];
        
        // Focus first element
        setTimeout(() => firstFocusableElement.focus(), 100);
    }
});

document.addEventListener('keydown', (e) => {
    if (!navMenu.classList.contains('active')) return;
    
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    }
});

// ===================================
// Console Welcome Message
// ===================================

console.log(
    '%c🏗️ BuildPro Construction Website',
    'font-size: 20px; font-weight: bold; color: #FF6B35;'
);
console.log(
    '%cBuilt with modern web technologies and attention to detail.',
    'font-size: 12px; color: #00D9FF;'
);

// ===================================
// Analytics & Tracking (Placeholder)
// ===================================

// Track button clicks
const trackableButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

trackableButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = button.textContent.trim();
        const buttonHref = button.getAttribute('href');
        
        // In production, send to analytics service:
        // gtag('event', 'button_click', {
        //     'event_category': 'engagement',
        //     'event_label': buttonText,
        //     'value': buttonHref
        // });
        
        console.log('Button clicked:', buttonText, buttonHref);
    });
});

// Track form submissions
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        // In production:
        // gtag('event', 'form_submission', {
        //     'event_category': 'lead',
        //     'event_label': 'contact_form'
        // });
        
        console.log('Form submitted: Contact Form');
    });
}
