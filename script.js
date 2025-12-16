// ===================================
// OHB Website - JavaScript
// Our Home Builders and Constructions
// ===================================

// ===================================
// DOM Elements
// ===================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('back-to-top');
const sections = document.querySelectorAll('section[id]');

// ===================================
// Navigation & Scroll Behavior
// ===================================

let lastScroll = 0;

// Sticky navbar with blur effect on scroll
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for styling (after 100px as per design guide)
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility (after 300px)
    if (currentScroll > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Hamburger Menu Toggle
// ===================================

hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================

function updateActiveLink() {
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                link.setAttribute('aria-current', 'false');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
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

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe all elements with scroll-animate class
const animateElements = document.querySelectorAll('.scroll-animate');
animateElements.forEach(element => {
    scrollObserver.observe(element);
});

// ===================================
// Project Filter Functionality
// ===================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        
        const filter = button.dataset.filter;
        
        // Filter projects with animation
        projectCards.forEach((card, index) => {
            const category = card.dataset.category;
            
            // Add staggered animation delay
            card.style.transitionDelay = `${index * 50}ms`;
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===================================
// Contact Form Validation & Submission
// ===================================

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Validation
        if (!name || !email || !phone || !service || !message) {
            showFormStatus('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormStatus('Please enter a valid email address.', 'error');
            return;
        }
        
        // Phone validation (Indian mobile)
        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanPhone = phone.replace(/\D/g, '').slice(-10);
        if (!phoneRegex.test(cleanPhone)) {
            showFormStatus('Please enter a valid 10-digit phone number.', 'error');
            return;
        }
        
        // Simulate form submission
        try {
            showFormStatus('Sending message...', 'info');
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // In production, send to backend:
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, phone, service, message })
            // });
            
            showFormStatus('Thank you! Your message has been sent successfully. We\'ll contact you within 24 hours.', 'success');
            contactForm.reset();
            
        } catch (error) {
            showFormStatus('Oops! Something went wrong. Please try again or call us directly.', 'error');
            console.error('Form submission error:', error);
        }
    });
}

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
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate subscription
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            newsletterForm.reset();
        } catch (error) {
            showNotification('Subscription failed. Please try again.', 'error');
            console.error('Newsletter subscription error:', error);
        }
    });
}

// Simple notification function
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 50);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===================================
// Lazy Loading Enhancement
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
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
    }
}, 250);

window.addEventListener('resize', handleResize);

// ===================================
// Page Load Animations
// ===================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    updateActiveLink();
});

// ===================================
// Accessibility Enhancements
// ===================================

// Escape key closes mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
        hamburger.focus();
    }
});

// Focus trap for mobile menu
const focusableElements = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
let firstFocusableElement;
let lastFocusableElement;

hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        const focusableContent = navMenu.querySelectorAll(focusableElements);
        firstFocusableElement = focusableContent[0];
        lastFocusableElement = focusableContent[focusableContent.length - 1];
        
        // Focus first element
        setTimeout(() => firstFocusableElement?.focus(), 100);
    }
});

document.addEventListener('keydown', (e) => {
    if (!navMenu.classList.contains('active')) return;
    
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement?.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement?.focus();
                e.preventDefault();
            }
        }
    }
});

// ===================================
// Parallax Effect for Hero (Desktop Only)
// ===================================

if (window.innerWidth > 768) {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (hero && scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = `${rate}px`;
        }
    });
}

// ===================================
// Stats Counter Animation
// ===================================

const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateStats();
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    statsObserver.observe(statsSection);
}

function animateStats() {
    statNumbers.forEach(stat => {
        const target = stat.textContent;
        const numericValue = parseInt(target.replace(/\D/g, ''));
        const suffix = target.replace(/[0-9]/g, '');
        
        let current = 0;
        const increment = numericValue / 50;
        const duration = 1500;
        const stepTime = duration / 50;
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                stat.textContent = numericValue + suffix;
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(current) + suffix;
            }
        }, stepTime);
    });
}

// ===================================
// Console Welcome Message
// ===================================

console.log(
    '%c🏗️ OHB - Our Home Builders and Constructions',
    'font-size: 18px; font-weight: bold; color: #2ba399;'
);
console.log(
    '%cBuilding Dreams into Reality | Thiruvananthapuram, Kerala',
    'font-size: 12px; color: #1a3a52;'
);
console.log(
    '%cWebsite designed following the OHB Design System',
    'font-size: 11px; color: #666666;'
);

// ===================================
// Analytics & Tracking (Placeholder)
// ===================================

// Track CTA button clicks
const trackableButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-tertiary');

trackableButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = button.textContent.trim();
        const buttonHref = button.getAttribute('href');
        
        // In production, send to analytics:
        // gtag('event', 'cta_click', {
        //     'event_category': 'engagement',
        //     'event_label': buttonText,
        //     'value': buttonHref
        // });
        
        console.log('CTA clicked:', buttonText);
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

// Track project card interactions
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectName = card.querySelector('.project-name')?.textContent;
        console.log('Project viewed:', projectName);
    });
});
