/**
 * Elly Portfolio - Component Loader & Interactivity
 */

const components = [
    { id: 'nav-placeholder', file: 'sections/nav.html' },
    { id: 'hero-placeholder', file: 'sections/hero.html' },
    { id: 'impact-placeholder', file: 'sections/impact.html' },
    { id: 'experience-placeholder', file: 'sections/experience.html' },
    { id: 'projects-placeholder', file: 'sections/projects.html' },
    { id: 'skills-placeholder', file: 'sections/skills.html' },
    { id: 'education-placeholder', file: 'sections/education.html' },
    { id: 'certifications-placeholder', file: 'sections/certifications.html' },
    { id: 'footer-placeholder', file: 'sections/footer.html' }
];

/**
 * Load all components asynchronously
 */
async function loadComponents() {
    for (const comp of components) {
        try {
            const response = await fetch(comp.file);
            if (!response.ok) throw new Error(`Failed to load ${comp.file}`);
            const html = await response.text();
            document.getElementById(comp.id).innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    }
    
    // After all components are loaded, initialize interactivity
    initScrollReveal();
    initMobileMenu();
    updateActiveNavLink();
}

/**
 * Initialize Mobile Menu Toggle
 */
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

/**
 * Initialize Scroll Reveal Intersection Observer
 */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                e.target.style.transitionDelay = (i * 0.06) + 's';
                e.target.classList.add('visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    
    reveals.forEach(el => io.observe(el));
}

/**
 * Update active navigation link based on scroll position (Optional Polish)
 */
function updateActiveNavLink() {
    // Basic navigation polish can be added here
}

// Start loading when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);
