// Define Variables
const priceTogBg = document.getElementById('switch');
const monhtly = document.getElementById('monthly');
const yearly = document.getElementById('yearly');
const circle = document.getElementById('circle');
const basMonPr = document.getElementById('basic-mon-pr');
const proMonPr = document.getElementById('pro-mon-pr');
const busMonPr = document.getElementById('bus-mon-pr');
const basYrPr = document.getElementById('basic-yr-pr');
const proYrPr = document.getElementById('pro-yr-pr');
const busYrPr = document.getElementById('bus-yr-pr');

// Toggle Click
priceTogBg.onclick = (e) => {
  monthly.classList.toggle('active');
  yearly.classList.toggle('active');
  priceTogBg.classList.toggle('oval-clicked');
  circle.classList.toggle('circle-clicked');
  basMonPr.style.display === 'none'
    ? (basMonPr.style.display = 'block')
    : (basMonPr.style.display = 'none');
  proMonPr.style.display === 'none'
    ? (proMonPr.style.display = 'block')
    : (proMonPr.style.display = 'none');
  busMonPr.style.display === 'none'
    ? (busMonPr.style.display = 'block')
    : (busMonPr.style.display = 'none');
  basYrPr.style.display === 'none'
    ? (basYrPr.style.display = 'block')
    : (basYrPr.style.display = 'none');
  proYrPr.style.display === 'none'
    ? (proYrPr.style.display = 'block')
    : (proYrPr.style.display = 'none');
  busYrPr.style.display === 'none'
    ? (busYrPr.style.display = 'block')
    : (busYrPr.style.display = 'none');
};
