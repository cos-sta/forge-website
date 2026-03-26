// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Mobile dropdown toggle
const dropdowns = document.querySelectorAll('.nav-dropdown');
dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector('.dropdown-trigger');
  trigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    }
  });
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link:not(.dropdown-trigger), .dropdown-item').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.06)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
