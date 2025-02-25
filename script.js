// Datos del banco de preguntas
const bancoPreguntas = [
  {
    pregunta: "¿Qué es un sistema?",
    respuesta: "Conjunto de elementos interrelacionados que trabajan para alcanzar un objetivo.",
    explicacion: "Un sistema es una colección de partes que interactúan para lograr un propósito común."
  },
  {
    pregunta: "¿Qué es sinergia?",
    respuesta: "Efecto en el que el todo es mayor que la suma de sus partes.",
    explicacion: "La sinergia ocurre cuando la colaboración entre partes produce un resultado superior al que se obtendría individualmente."
  },
  {
    pregunta: "¿Qué es homeostasis?",
    respuesta: "Equilibrio dinámico que mantiene un sistema.",
    explicacion: "La homeostasis es la capacidad de un sistema para mantener su estabilidad interna a pesar de los cambios externos."
  },
  // Añade más preguntas aquí
];

// Mostrar contenido del tema seleccionado
document.querySelectorAll('.bloque').forEach(bloque => {
  bloque.addEventListener('click', () => {
    const tema = bloque.getAttribute('data-tema');
    if (tema === "banco-preguntas") {
      mostrarBancoPreguntas();
    } else {
      mostrarTema(tema);
    }
  });
});

// Función para mostrar el banco de preguntas
function mostrarBancoPreguntas() {
  document.getElementById('galeria').classList.add('hidden');
  document.getElementById('banco-preguntas').classList.remove('hidden');

  const tarjetasPreguntas = document.getElementById('tarjetas-preguntas');
  tarjetasPreguntas.innerHTML = "";

  // Mezclar preguntas para que sean aleatorias
  const preguntasMezcladas = bancoPreguntas.sort(() => Math.random() - 0.5);

  // Mostrar las preguntas en tarjetas
  preguntasMezcladas.forEach((pregunta, index) => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    tarjeta.innerHTML = `
      <h3>${pregunta.pregunta}</h3>
      <div class="respuesta" id="respuesta-${index}">
        <p><strong>Respuesta:</strong> ${pregunta.respuesta}</p>
        <p><strong>Explicación:</strong> ${pregunta.explicacion}</p>
      </div>
    `;
    tarjeta.addEventListener('click', () => {
      const respuesta = document.getElementById(`respuesta-${index}`);
      respuesta.style.display = respuesta.style.display === 'block' ? 'none' : 'block';
    });
    tarjetasPreguntas.appendChild(tarjeta);
  });
}

// Volver a la galería desde el banco de preguntas
document.getElementById('volver-banco').addEventListener('click', () => {
  document.getElementById('banco-preguntas').classList.add('hidden');
  document.getElementById('galeria').classList.remove('hidden');
});

// Funciones anteriores (mostrarTema, verificarRespuesta, etc.)
// ...
