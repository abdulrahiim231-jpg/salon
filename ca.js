// ===== NAVBAR WORK TRACKER =====
// Total Navbar Components: 1 (Complete)
// ===================================
// 1. Mobile Menu Toggle System (100% Complete)
//    - Hamburger animation (X transformation)
//    - Mobile menu slide animation
//    - Body scroll lock when open
//    - Click outside to close
//    - Link click auto-close
//    - Window resize handling
// ===================================

// Mobile menu toggle with animation
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    // Toggle hamburger animation
    mobileMenuBtn.classList.toggle('active');
    
    // Toggle mobile menu animation
    mobileMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on links
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});