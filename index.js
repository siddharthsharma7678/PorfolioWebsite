

const sroll = 0;
document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector('.scroll-down');
  if (scrollButton) {
    scrollButton.addEventListener('click', function () {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }
  // console.log('DOM fully loaded and parsed');

  
  // toggle the menu
  
  const cancel = document.querySelector('.tham-cancel');
  const menu = document.querySelector('.tham');
  cancel.addEventListener('click', function () {
    menu.style.display = 'none';
  });
  
  // show and hide hamburger menu

  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', function () {
    menu.style.display = 'flex';
  });
});
const Inputname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const button = document.querySelector('.submit');

button.addEventListener('click', function (e) {
  e.preventDefault();
  if (Inputname.value === '' || email.value === '' || message.value === '') {
    alert('Please fill in all fields');
  } else {
    alert('Thank you for your message!');
    Inputname.value = '';
    email.value = '';
    message.value = '';
  }
});