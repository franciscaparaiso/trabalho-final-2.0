// ==========================================
// MENU MOBILE
// ==========================================
const burger = document.querySelector('.burger');
const navLinksContainer = document.querySelector('.nav-links');

if (burger && navLinksContainer) {
    burger.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
        burger.classList.toggle('active');
    });
}

// Fechar menu ao clicar em link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinksContainer && navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
            if (burger) burger.classList.remove('active');
        }
    });
});

// ==========================================
// PORTFOLIO - NAVEGAÇÃO SIMPLES
// ==========================================
let currentSlide = 0;

function updatePortfolio() {
    const items = document.querySelectorAll('.portfolio-item');
    
    if (items.length === 0) return;
    
    // Esconder todos
    items.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('active');
    });
    
    // Mostrar atual
    items[currentSlide].style.display = 'block';
    items[currentSlide].classList.add('active');
    
    // Atualizar contador
    const current = document.getElementById('currentSlide');
    const total = document.getElementById('totalSlides');
    if (current) current.textContent = currentSlide + 1;
    if (total) total.textContent = items.length;
}

function nextSlide() {
    const items = document.querySelectorAll('.portfolio-item');
    currentSlide++;
    if (currentSlide >= items.length) currentSlide = 0;
    updatePortfolio();
}

function prevSlide() {
    const items = document.querySelectorAll('.portfolio-item');
    currentSlide--;
    if (currentSlide < 0) currentSlide = items.length - 1;
    updatePortfolio();
}

// Botões
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (nextBtn) {
    nextBtn.onclick = function() {
        nextSlide();
    };
}

if (prevBtn) {
    prevBtn.onclick = function() {
        prevSlide();
    };
}

// Teclado
document.onkeydown = function(e) {
    const items = document.querySelectorAll('.portfolio-item');
    if (items.length === 0) return;
    
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
};

// Inicializar quando carregar
window.onload = function() {
    updatePortfolio();
    animateSkills();
};

// ==========================================
// SKILLS ANIMATION
// ==========================================
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

// ==========================================
// CONTACT FORM
// ==========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.onsubmit = function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        
        alert(`Obrigado ${nome}! 🌸\n\nRecebemos a sua mensagem e entraremos em contacto em breve através do email: ${email}`);
        
        contactForm.reset();
    };
}

// ==========================================
// THEME TOGGLE
// ==========================================
const themeToggle = document.getElementById('themeToggle');
let isDark = false;

if (themeToggle) {
    themeToggle.onclick = function() {
        isDark = !isDark;
        
        if (isDark) {
            document.documentElement.style.setProperty('--creme', '#2a2a2a');
            document.documentElement.style.setProperty('--texto', '#e0e0e0');
            themeToggle.textContent = '☀️';
        } else {
            document.documentElement.style.setProperty('--creme', '#fff8f0');
            document.documentElement.style.setProperty('--texto', '#5a4a42');
            themeToggle.textContent = '🌙';
        }
    };
}

// ==========================================
// FEATURE CARDS
// ==========================================
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.onclick = function() {
        card.style.transform = 'scale(1.1) rotate(2deg)';
        setTimeout(() => {
            card.style.transform = '';
        }, 300);
    };
});