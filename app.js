// Sticky Header and Scroll Reveal
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const reveals = document.querySelectorAll('.reveal');

    // Smart Header: Hide on scroll down, show on scroll up
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

        // Scrolled background state
        if (currentScrollY > 50 || !isHomePage) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/Show logic
        if (currentScrollY <= 10) {
            // Always show at the very top
            header.classList.remove('header-hidden');
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            header.classList.add('header-hidden');
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up
            header.classList.remove('header-hidden');
        }

        lastScrollY = currentScrollY;
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Reveal elements on scroll
    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});
