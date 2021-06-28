// Declare variables
const hamburgerImg = document.getElementById('hamburger-img');
const closeImg = document.getElementById('close-img');
const dropdownMenu = document.getElementById('dropdown-menu');
const docBody = document.querySelector('body');
const docHtml = document.querySelector('html');
const overlay = document.getElementById('overlay');

// Show dropdown nav for mobile
const showDropdown = () => {
  hamburgerImg.style.display = 'none';
  closeImg.style.display = 'block';
  dropdownMenu.style.display = 'flex';
  overlay.style.display = 'block';
  docBody.style.overflow = 'hidden';
  docHtml.style.overflow = 'hidden';
};

// Hide dropdown nav for mobile
const hideDropdown = () => {
  hamburgerImg.style.display = 'block';
  closeImg.style.display = 'none';
  dropdownMenu.style.display = 'none';
  overlay.style.display = 'none';
  docBody.style.overflow = 'visible';
  docHtml.style.overflow = 'visible';
};

// Close Mobile Header when Screen Size Grows
const closeMobileHeader = () => {
  if (window.innerWidth > 500) {
    hamburgerImg.style.display = 'none';
    closeImg.style.display = 'none';
    dropdownMenu.style.display = 'none';
    overlay.style.display = 'none';
    docBody.style.overflow = 'visible';
    docHtml.style.overflow = 'visible';
  } else {
    if (
      hamburgerImg.style.display === 'block' ||
      (hamburgerImg.style.display === 'none' &&
        closeImg.style.display === 'none')
    ) {
      hideDropdown();
    } else {
      showDropdown();
    }
  }
};

// Events
window.addEventListener('resize', closeMobileHeader);
hamburgerImg.onclick = () => showDropdown();
closeImg.onclick = () => hideDropdown();
