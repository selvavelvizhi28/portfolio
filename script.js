// Small interactive behavior: mobile nav toggle, contact handler, year
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', () => {
    const isOpen = siteNav.style.display === 'flex';
    siteNav.style.display = isOpen ? 'none' : 'flex';
    siteNav.style.flexDirection = 'column';
  });

  // Footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Basic contact form handler — opens mail client with prefilled content.
// Replace with API endpoint or Formspree if you want server submissions.
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !email || !message) {
    alert('Please complete all fields.');
    return;
  }

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  // Optionally show a success message or reset the form:
  // document.getElementById('contact-form').reset();
}