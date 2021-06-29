(function () {
  // Define Variables
  const priceTogBg = document.getElementById('switch');
  const monthly = document.getElementById('monthly');
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
    basMonPr.classList.toggle('hide');
    proMonPr.classList.toggle('hide');
    busMonPr.classList.toggle('hide');
    basYrPr.classList.toggle('hide');
    proYrPr.classList.toggle('hide');
    busYrPr.classList.toggle('hide');
  };
})();
