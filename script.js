/* VerBal Marketing Agency — script.js */

/* --- Smooth scroll for anchor links --- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMobileMenu();
  });
});

/* --- Mobile nav toggle --- */
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.hidden = true;
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Abrir menú');
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.hidden;
    mobileMenu.hidden = isOpen;
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  });

  document.addEventListener('click', e => {
    if (!mobileMenu.hidden && !navToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !mobileMenu.hidden) closeMobileMenu();
  });
}

/* --- Header scroll shadow --- */
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 16px rgba(44,24,16,0.12)'
      : 'none';
  }, { passive: true });
}

/* --- Intersection Observer — fade-in on scroll --- */
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  fadeEls.forEach(el => observer.observe(el));
}

/* --- Active nav link on scroll --- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

if (sections.length && navLinks.length) {
  const navObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach(s => navObserver.observe(s));
}

/* --- Contact form — Formspree AJAX submission --- */
const form = document.querySelector('.contact-form');
const formSuccess = document.querySelector('.form-success');
const formError = document.querySelector('.form-error');

if (form && formSuccess && formError) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;

    if (form.action.includes('XXXXXXXX')) {
      formError.hidden = false;
      formError.textContent = 'El formulario aún no está configurado. Por favor, contactanos por WhatsApp.';
      setTimeout(() => { formError.hidden = true; }, 5000);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        formSuccess.hidden = false;
        formError.hidden = true;
        setTimeout(() => { formSuccess.hidden = true; }, 6000);
      } else {
        throw new Error('Server error');
      }
    } catch {
      formError.hidden = false;
      formError.textContent = 'Ups, algo salió mal. Intentá de nuevo o escribinos por WhatsApp.';
      formSuccess.hidden = true;
      setTimeout(() => { formError.hidden = true; }, 5000);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

/* --- Footer year --- */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
