// Nav toggle (mobile)
const toggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (toggle && navMenu) {
  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Close on link click
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

// Active nav link based on current page
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// Simple contact form handler
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '送信完了しました';
    btn.disabled = true;
  });
}
