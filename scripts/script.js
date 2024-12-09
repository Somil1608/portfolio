// AOS Initialization
AOS.init();

// Back-to-Top Button Functionality
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const responseMessage = document.getElementById('response-message');
  responseMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  responseMessage.style.color = 'green';
  this.reset();
});
