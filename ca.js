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

// ===== GLASSMORPHISM CARD RESPONSIVE WORK TRACKER =====
// Total Card Components: 1 (Complete)
// ==========================================================
// 1. Fully Responsive Glassmorphism Card (100% Complete)
//    - Mobile First Design (320px+): Ultra-compact layout
//      * Card width: w-72 (288px)
//      * Position: left-2 (8px from left)
//      * Padding: p-4 (16px)
//      * Heading: text-xl (1.25rem)
//      * Button: text-sm, py-3, px-4
//    
//    - Tablet Design (640px+): Balanced medium screens
//      * Card width: sm:w-80 (320px)
//      * Position: sm:left-4 (16px from left)
//      * Padding: sm:p-5 (20px)
//      * Heading: sm:text-2xl (1.5rem)
//      * Button: sm:text-base, sm:py-3, sm:px-6
//    
//    - Medium Desktop (768px+): Enhanced experience
//      * Card width: md:w-88 (352px)
//      * Position: md:left-6 (24px from left)
//      * Padding: md:p-6 (24px)
//      * Heading: md:text-3xl (1.875rem)
//      * Button: md:text-lg, md:py-4, md:px-8
//    
//    - Large Desktop (1024px+): Premium experience
//      * Card width: lg:w-96 (384px)
//      * Position: lg:left-8 (32px from left)
//      * Padding: lg:p-7 (28px)
//      * Heading: lg:text-3xl (1.875rem)
//      * Button: lg:text-lg, lg:py-4, lg:px-8
//    
//    - Extra Large Desktop (1280px+): Maximum experience
//      * Card width: xl:w-100 (400px)
//      * Position: xl:left-12 (48px from left)
//      * Padding: xl:p-8 (32px)
//      * Heading: xl:text-4xl (2.25rem)
//      * Button: xl:text-xl, xl:py-4, xl:px-8
//    
//    - Responsive Features:
//      * Progressive max-width: 90vw > 85vw > 80vw > 75vw > 70vw
//      * Progressive border-radius: rounded-xl > rounded-2xl
//      * Progressive text opacity: 70% > 75% > 80%
//      * Progressive shadow intensity
//      * z-index layering for proper stacking
// ==========================================================

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