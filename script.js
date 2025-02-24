// Datos de los temas y preguntas aleatorias
const temas = {
  introduccion: {
    titulo: "Introducción a la Organización",
    contenido: `
      <p><strong>Definición:</strong> La organización es el proceso de estructurar y coordinar los recursos (humanos, materiales, financieros y tecnológicos) para alcanzar los objetivos de una empresa de manera eficiente.</p>
      <p><strong>Importancia:</strong> Permite optimizar el uso de recursos, mejorar la productividad y facilitar la toma de decisiones.</p>
      <p><strong>Relación con la administración:</strong> Es una de las funciones básicas de la administración (junto con la planificación, dirección y control).</p>
    `,
    preguntas: [
      { pregunta: "¿Qué es la organización?", opciones: ["Estructurar recursos", "Planificar estrategias"], respuesta: 0 },
      { pregunta: "¿Qué permite la organización?", opciones: ["Optimizar recursos", "Aumentar costos"], respuesta: 0 },
    ],
  },
  principios: {
    titulo: "Principios de la Organización",
    contenido: `
      <p><strong>División del trabajo:</strong> Asignar tareas específicas a cada persona o departamento.</p>
      <p><strong>Unidad de mando:</strong> Cada empleado debe reportar a un solo supervisor.</p>
      <p><strong>Jerarquía:</strong> Establecer niveles de autoridad y responsabilidad.</p>
    `,
    preguntas: [
      { pregunta: "¿Qué es la división del trabajo?", opciones: ["Asignar tareas", "Centralizar decisiones"], respuesta: 0 },
      { pregunta: "¿Qué principio establece que cada empleado debe reportar a un solo supervisor?", opciones: ["Unidad de mando", "Jerarquía"], respuesta: 0 },
    ],
  },
  estructuras: {
    titulo: "Tipos de Estructuras",
    contenido: `
      <p><strong>Estructura lineal:</strong> Líneas claras de autoridad y responsabilidad (piramidal).</p>
      <p><strong>Estructura funcional:</strong> Organizada por áreas especializadas (finanzas, marketing, etc.).</p>
      <p><strong>Estructura matricial:</strong> Combina departamentos funcionales con equipos de proyectos.</p>
    `,
    preguntas: [
      { pregunta: "¿Qué estructura es piramidal?", opciones: ["Lineal", "Matricial"], respuesta: 0 },
      { pregunta: "¿Qué estructura combina funciones y proyectos?", opciones: ["Funcional", "Matricial"], respuesta: 1 },
    ],
  },
  proceso: {
    titulo: "Proceso de Organización",
    contenido: `
      <p><strong>Identificar objetivos:</strong> Saber qué se quiere lograr.</p>
      <p><strong>Dividir el trabajo:</strong> Asignar tareas y responsabilidades.</p>
      <p><strong>Agrupar actividades:</strong> Crear departamentos o áreas.</p>
    `,
    preguntas: [
      { pregunta: "¿Cuál es el primer paso del proceso de organización?", opciones: ["Identificar objetivos", "Dividir el trabajo"], respuesta: 0 },
      { pregunta: "¿Qué paso sigue después de dividir el trabajo?", opciones: ["Agrupar actividades", "Asignar recursos"], respuesta: 0 },
    ],
  },
  herramientas: {
    titulo: "Herramientas de Organización",
    contenido: `
      <p><strong>Organigramas:</strong> Representación gráfica de la estructura de la empresa.</p>
      <p><strong>Manuales de procedimientos:</strong> Documentos que describen cómo realizar tareas.</p>
      <p><strong>Flujogramas:</strong> Diagramas que muestran el flujo de procesos.</p>
    `,
    preguntas: [
      { pregunta: "¿Qué herramienta representa la estructura de la empresa?", opciones: ["Organigrama", "Flujograma"], respuesta: 0 },
      { pregunta: "¿Qué herramienta muestra el flujo de procesos?", opciones: ["Organigrama", "Flujograma"], respuesta: 1 },
    ],
  },
  desafios: {
    titulo: "Desafíos en la Organización",
    contenido: `
      <p><strong>Resistencia al cambio:</strong> Los empleados pueden oponerse a nuevas estructuras.</p>
      <p><strong>Comunicación ineficiente:</strong> Falta de claridad en la transmisión de información.</p>
      <p><strong>Rigidez organizacional:</strong> Estructuras que no se adaptan a cambios.</p>
    `,
    preguntas: [
      { pregunta: "¿Qué es la resistencia al cambio?", opciones: ["Oposición a nuevas estructuras", "Adaptación rápida"], respuesta: 0 },
      { pregunta: "¿Qué problema surge por falta de claridad en la comunicación?", opciones: ["Comunicación ineficiente", "Flexibilidad"], respuesta: 0 },
    ],
  },
  tendencias: {
    titulo: "Tendencias Modernas",
    contenido: `
      <p><strong>Organizaciones horizontales:</strong> Menos niveles jerárquicos y más autonomía.</p>
      <p><strong>Teletrabajo y equipos remotos:</strong> Flexibilidad en la ubicación física.</p>
      <p><strong>Agilidad organizacional:</strong> Capacidad de adaptarse rápidamente a cambios.</p>
    `,
    preguntas: [
      { pregunta: "¿Qué caracteriza a las organizaciones horizontales?", opciones: ["Menos niveles jerárquicos", "Más niveles jerárquicos"], respuesta: 0 },
      { pregunta: "¿Qué permite el teletrabajo?", opciones: ["Flexibilidad", "Rigidez"], respuesta: 0 },
    ],
  },
};

// Mostrar contenido del tema seleccionado
document.querySelectorAll('.bloque').forEach(bloque => {
  bloque.addEventListener('click', () => {
    const tema = bloque.getAttribute('data-tema');
    mostrarTema(tema);
  });
});

// Función para mostrar el tema y el cuestionario
function mostrarTema(tema) {
  const contenido = temas[tema];
  document.getElementById('galeria').classList.add('hidden');
  document.getElementById('contenido').classList.remove('hidden');

  // Mostrar contenido del tema
  document.getElementById('detalle-tema').innerHTML = `
    <h2>${contenido.titulo}</h2>
    ${contenido.contenido}
  `;

  // Mostrar cuestionario aleatorio
  const preguntaAleatoria = contenido.preguntas[Math.floor(Math.random() * contenido.preguntas.length)];
  document.getElementById('cuestionario').innerHTML = `
    <div class="pregunta">
      <h3>${preguntaAleatoria.pregunta}</h3>
      ${preguntaAleatoria.opciones.map((opcion, index) => `
        <label>
          <input type="radio" name="pregunta" value="${index}"> ${opcion}
        </label><br>
      `).join('')}
      <button onclick="verificarRespuesta(${preguntaAleatoria.respuesta})">Enviar</button>
      <p id="resultado"></p>
    </div>
  `;
}

// Función para verificar la respuesta
function verificarRespuesta(respuestaCorrecta) {
  const seleccionada = document.querySelector('input[name="pregunta"]:checked');
  if (seleccionada && parseInt(seleccionada.value) === respuestaCorrecta) {
    document.getElementById('resultado').textContent = "¡Correcto!";
  } else {
    document.getElementById('resultado').textContent = "Incorrecto. Intenta de nuevo.";
  }
}

// Volver a la galería
document.getElementById('volver').addEventListener('click', () => {
  document.getElementById('galeria').classList.remove('hidden');
  document.getElementById('contenido').classList.add('hidden');
});