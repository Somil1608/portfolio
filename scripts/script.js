// AOS Initialization
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  });
  
  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Dynamic Navigation Highlight
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
  //--------------------------googlesheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbwpY2Ox86E2bgdTDiu4uGK_AEQ_6LwufMLPZdrJKAHkzuMsf49BLzPRh4siXIvbyZBu/exec'; // Replace this with your Web App URL
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    responseMessage.innerText = "Your message has been sent successfully!";
    responseMessage.style.color = "green";
    form.reset();
  })
  .catch(error => {
    responseMessage.innerText = "Error! Please try again.";
    responseMessage.style.color = "red";
    console.error('Error:', error);
  });
});
