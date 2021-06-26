// Declare variables
const hamburgerImg = document.getElementById('hamburger-img');
const closeImg = document.getElementById('close-img');
const dropdownMenu = document.getElementById('dropdown-menu');
const docBody = document.querySelector('body');
const docHtml = document.querySelector('html');
const overlay = document.getElementById('overlay');

// Hamburger Click
hamburgerImg.onclick = (e) => {
  hamburgerImg.style.display = 'none';
  closeImg.style.display = 'block';
  dropdownMenu.style.display = 'flex';
  docBody.style.overflow = 'hidden';
  docHtml.style.overflow = 'hidden';
  overlay.style.display = 'block';
};

// Close Click
closeImg.onclick = (e) => {
  closeImg.style.display = 'none';
  hamburgerImg.style.display = 'block';
  dropdownMenu.style.display = 'none';
  docBody.style.overflow = 'visible';
  docHtml.style.overflow = 'visible';
  overlay.style.display = 'none';
};
