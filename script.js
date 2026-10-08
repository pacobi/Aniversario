const inicio = document.getElementById('inicio');
const test = document.getElementById('test');
const final = document.getElementById('final');

const btnSigue = document.getElementById('btnSigue');
const opciones = document.querySelectorAll('.opcion');
const resultado = document.getElementById('resultado');
const btnMensaje = document.getElementById('btnMensaje');
const mensaje = document.getElementById('mensaje');
const btnPresionalo = document.getElementById('btnPresionalo');
const flores = document.getElementById('flores');

// Inicio -> Test
btnSigue.addEventListener('click', () => {
  inicio.classList.add('oculto');
  test.classList.remove('oculto');
});

// Responder la pregunta
opciones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const esCorrecta = boton.dataset.correcta === 'true';

    resultado.classList.remove('oculto');

    if (esCorrecta) {
      resultado.textContent = 'Esa es la fecha más especial en mi vida 💜';
      btnMensaje.classList.remove('oculto');
      opciones.forEach((o) => (o.disabled = true));
    } else {
      resultado.textContent = 'Mmm, intenta otra vez 💚';
      boton.classList.add('incorrecta');
    }
  });
});

// Mensajito -> aparece el mensaje y el botón "Presiónalo"
btnMensaje.addEventListener('click', () => {
  mensaje.classList.remove('oculto');
  btnMensaje.classList.add('oculto');
  btnPresionalo.classList.remove('oculto');
});

// Presiónalo -> pantalla final con flores
btnPresionalo.addEventListener('click', () => {
  test.classList.add('oculto');
  final.classList.remove('oculto');
  crearFlores();
});

// Crear las flores que caen por la pantalla
function crearFlores() {
  const emojis = ['🌸', '🌷', '🌺', '🌼', '🌹', '💮'];
  const cantidad = 30;

  for (let i = 0; i < cantidad; i++) {
    const flor = document.createElement('span');
    flor.className = 'flor';
    flor.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    flor.style.left = Math.random() * 100 + 'vw';
    flor.style.fontSize = 18 + Math.random() * 24 + 'px';
    flor.style.animationDuration = 6 + Math.random() * 6 + 's';
    flor.style.animationDelay = -Math.random() * 10 + 's';
    flores.appendChild(flor);
  }
}