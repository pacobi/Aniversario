const inicio = document.getElementById('inicio');
const test = document.getElementById('test');
const btnSigue = document.getElementById('btnSigue');
const opciones = document.querySelectorAll('.opcion');
const resultado = document.getElementById('resultado');
const btnMensaje = document.getElementById('btnMensaje');
const mensaje = document.getElementById('mensaje');

// Ir del inicio al test
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
      // Bloquear las opciones una vez acertada
      opciones.forEach((o) => (o.disabled = true));
    } else {
      resultado.textContent = 'Mmm, intenta otra vez 💚';
      boton.classList.add('incorrecta');
    }
  });
});

// Mostrar el mensajito
btnMensaje.addEventListener('click', () => {
  mensaje.classList.remove('oculto');
  btnMensaje.classList.add('oculto');
});