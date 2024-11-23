 // Mobile menu functionality
 const menuBtn = document.querySelector('.menu-btn');
 const navLinks = document.querySelector('.nav-links');
 
 menuBtn.addEventListener('click', () => {
     menuBtn.classList.toggle('active');
     navLinks.classList.toggle('active');
 });

 // Close menu when clicking a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         menuBtn.classList.remove('active');
         navLinks.classList.remove('active');
     });
 });