let puntosCara = 0;
let puntosCruz = 0;

function lanzarMoneda() {
  let coin = document.getElementById('coin');
  let  score = document.getElementById('score');

  coin.style.animation = 'none'; // Detener la animación de giro
  void coin.offsetWidth; // Reiniciar la animación de giro
  coin.style.animation = null; // Reanudar la animación de giro

  let resultado = Math.round(Math.random());

  if (resultado === 0) {
    coin.className = 'cara';
    puntosCara++;
  } else {
    coin.className = 'cruz';
    puntosCruz++;
  }

  score.textContent = 'Cara: ' + puntosCara + ' | Cruz: ' + puntosCruz;
}

function reiniciarJuego() {
  puntosCara = 0;
  puntosCruz = 0;

  let coin = document.getElementById('coin');
  let score = document.getElementById('score');

  coin.className = 'cara';
  score.textContent = 'Cara: ' + puntosCara + ' | Cruz: ' + puntosCruz;
}
