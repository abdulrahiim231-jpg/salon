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

// ===== MOBILE RESPONSIVE OPTIMIZATION WORK TRACKER =====
// Total Mobile Components: 2 (Complete)
// ==========================================================
// 1. Mobile Navbar Optimization (100% Complete)
//    - Ultra-compact design for small screens
//      * 320px-380px: logo-text 0.625rem, logo-img 1.5rem, padding 0.25rem
//      * 380px-480px: logo-text 0.75rem, logo-img 1.75rem, padding 0.375rem
//      * 480px-640px: logo-text 0.875rem, logo-img 2rem, padding 0.5rem
//      * hamburger-btn padding: 0.25rem (ultra-compact)
//      * mobile-menu padding: 0.75rem (optimized)
//    
// 2. Mobile Hero Card Optimization (100% Complete)
//    - Ultra-compact glassmorphism card
//      * 320px+: w-64 (256px), left-1 (4px), p-3 (12px)
//      * Heading: text-lg (1.125rem), letter-spacing 0.02em
//      * Sub-text: text-xs, opacity 60%, leading-tight
//      * Button: text-xs, py-2, px-3, rounded-md
//      * max-width: 95vw (maximum space utilization)
//    
//    - Progressive scaling
//      * 380px+: w-72 (288px), left-2 (8px), p-4 (16px)
//      * 640px+: w-80 (320px), left-4 (16px), p-5 (20px)
//      * 768px+: w-88 (352px), left-6 (24px), p-6 (24px)
//      * 1024px+: w-96 (384px), left-8 (32px), p-7 (28px)
//      * 1280px+: w-100 (400px), left-12 (48px), p-8 (32px)
//    
//    - Mobile-first responsive features
//      * Progressive max-width: 95vw > 90vw > 85vw > 80vw > 75vw
//      * Progressive border-radius: rounded-lg > rounded-xl > rounded-2xl
//      * Progressive text opacity: 60% > 70% > 75% > 80%
//      * Progressive typography: xs > sm > base > lg > xl
//      * Optimized spacing for touch interactions
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