/* scripts.js – Sylwia Olszewska wizytówka */

// ---------- Mobile nav toggle ----------
const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.setAttribute('aria-label', expanded ? 'Otwórz menu' : 'Zamknij menu');
    mobileNav.hidden = expanded;
  });

  // Zamknij po kliknięciu linku
  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Otwórz menu');
    });
  });
}

// ---------- Scroll fade-in ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.article-card, .about-text, .about-photo, .contact-links')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
