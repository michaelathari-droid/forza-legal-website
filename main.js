// ── FORZA LEGAL DEFENSE — main.js ──

document.addEventListener('DOMContentLoaded', () => {

  // ── HAMBURGER MENU ──
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') navMenu.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  }

  // ── ACTIVE NAV LINK ──
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPath) link.classList.add('active');
  });

  // ── SCROLL ANIMATIONS (Intersection Observer) ──
  const fadeEls = document.querySelectorAll(
    '.practice-card, .testimonial-card, .why-list li, .dui-step, .attorney-stat, .contact-detail'
  );
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`;
      observer.observe(el);
    });
  }

  // ── FORM SUBMISSION (placeholder) ──
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! We will contact you shortly for your free case review.');
    });
  });

  // ── STICKY HEADER SHADOW ──
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
      } else {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
      }
    });
  }

  // ── PHONE LINK HIGHLIGHT (mobile) ──
  if ('ontouchstart' in window) {
    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      a.style.fontWeight = '700';
    });
  }

});
