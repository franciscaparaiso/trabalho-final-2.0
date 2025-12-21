// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinksContainer = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
}

// Close menu when clicking on a link (mobile)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
        }
    });
});

// Portfolio Navigation with Keyboard Support
let currentSlide = 0;
const portfolioItems = document.querySelectorAll('.portfolio-item');
const totalSlides = portfolioItems.length;

console.log('Portfolio items found:', totalSlides); // Debug

function showSlide(n) {
    if (portfolioItems.length === 0) return;
    
    console.log('Showing slide:', n); // Debug
    
    // Remove active from all items
    portfolioItems.forEach(item => item.classList.remove('active'));
    
    // Handle wrap around
    if (n >= totalSlides) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = n;
    }
    
    // Show current slide
    portfolioItems[currentSlide].classList.add('active');
    
    console.log('Active slide:', currentSlide); // Debug
    
    // Update counter
    const currentSlideElement = document.getElementById('currentSlide');
    const totalSlidesElement = document.getElementById('totalSlides');
    
    if (currentSlideElement) currentSlideElement.textContent = currentSlide + 1;
    if (totalSlidesElement) totalSlidesElement.textContent = totalSlides;
}

function portfolioNav(direction) {
    console.log('Navigate:', direction); // Debug
    currentSlide += direction;
    showSlide(currentSlide);
}

// Portfolio button controls
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

console.log('Prev button:', prevBtn); // Debug
console.log('Next button:', nextBtn); // Debug

if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Prev clicked'); // Debug
        portfolioNav(-1);
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Next clicked'); // Debug
        portfolioNav(1);
    });
}

// Keyboard Navigation for Portfolio
document.addEventListener('keydown', (e) => {
    // Check if we're on portfolio page
    if (portfolioItems.length > 0) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            console.log('Arrow Left pressed'); // Debug
            portfolioNav(-1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            console.log('Arrow Right pressed'); // Debug
            portfolioNav(1);
        }
    }
});

// Initialize portfolio counter if exists
if (totalSlides > 0) {
    const currentSlideElement = document.getElementById('currentSlide');
    const totalSlidesElement = document.getElementById('totalSlides');
    
    if (currentSlideElement) currentSlideElement.textContent = 1;
    if (totalSlidesElement) totalSlidesElement.textContent = totalSlides;
}

// Skills Animation - Animate on page load
function animateSkills() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.width = '0%';
        setTimeout(() => {
            skill.style.width = level + '%';
        }, 100);
    });
}

// Check if we're on competencias page and animate
if (document.querySelector('.skills-grid')) {
    // Animate on page load
    window.addEventListener('load', animateSkills);
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        alert(`Obrigado ${data.nome}! 🌸\n\nRecebemos a sua mensagem e entraremos em contacto em breve através do email: ${data.email}`);
        
        contactForm.reset();
    });
}

// Theme Toggle - Fixed version
const themeToggle = document.getElementById('themeToggle');
let isDark = false;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        const root = document.documentElement;
        
        if (isDark) {
            root.style.setProperty('--creme', '#2a2a2a');
            root.style.setProperty('--texto', '#e0e0e0');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            root.style.setProperty('--creme', '#fff8f0');
            root.style.setProperty('--texto', '#5a4a42');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Load saved theme
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' && themeToggle) {
        isDark = true;
        document.documentElement.style.setProperty('--creme', '#2a2a2a');
        document.documentElement.style.setProperty('--texto', '#e0e0e0');
        themeToggle.textContent = '☀️';
    }
});

// Feature Cards Interaction
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.1) rotate(2deg)';
        setTimeout(() => {
            card.style.transform = '';
        }, 300);
    });
});

// Smooth scroll to top when loading page
window.addEventListener('load', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});