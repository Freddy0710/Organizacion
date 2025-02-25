// Datos de los temas y preguntas aleatorias
const temas = {
  introduccion: {
    titulo: "Introducci&oacute;n a la Organizaci&oacute;n",
    contenido: `
      <p><strong>Definici&oacute;n:</strong> La organizaci&oacute;n es el proceso de estructurar y coordinar los recursos (humanos, materiales, financieros y tecnol&oacute;gicos) para alcanzar los objetivos de una empresa de manera eficiente.</p>
      <p><strong>Importancia:</strong> Permite optimizar el uso de recursos, mejorar la productividad y facilitar la toma de decisiones.</p>
      <p><strong>Relaci&oacute;n con la administraci&oacute;n:</strong> Es una de las funciones b&aacute;sicas de la administraci&oacute;n (junto con la planificaci&oacute;n, direcci&oacute;n y control).</p>
    `,
    preguntas: [
      { pregunta: "¿Qu&eacute; es la organizaci&oacute;n?", opciones: ["Estructurar recursos", "Planificar estrategias"], respuesta: 0 },
      { pregunta: "¿Qu&eacute; permite la organizaci&oacute;n?", opciones: ["Optimizar recursos", "Aumentar costos"], respuesta: 0 },
    ],
  },
  principios: {
    titulo: "Principios de la Organizaci&oacute;n",
    contenido: `
      <p><strong>Divisi&oacute;n del trabajo:</strong> Asignar tareas espec&iacute;ficas a cada persona o departamento.</p>
      <p><strong>Unidad de mando:</strong> Cada empleado debe reportar a un solo supervisor.</p>
      <p><strong>Jerarqu&iacute;a:</strong> Establecer niveles de autoridad y responsabilidad.</p>
    `,
    preguntas: [
      { pregunta: "¿Qu&eacute; es la divisi&oacute;n del trabajo?", opciones: ["Asignar tareas", "Centralizar decisiones"], respuesta: 0 },
      { pregunta: "¿Qu&eacute; principio establece que cada empleado debe reportar a un solo supervisor?", opciones: ["Unidad de mando", "Jerarqu&iacute;a"], respuesta: 0 },
    ],
  },
  estructuras: {
    titulo: "Tipos de Estructuras",
    contenido: `
      <p><strong>Estructura lineal:</strong> L&iacute;neas claras de autoridad y responsabilidad (piramidal).</p>
      <p><strong>Estructura funcional:</strong> Organizada por &aacute;reas especializadas (finanzas, marketing, etc.).</p>
      <p><strong>Estructura matricial:</strong> Combina departamentos funcionales con equipos de proyectos.</p>
    `,
    preguntas: [
      { pregunta: "¿Qu&eacute; estructura es piramidal?", opciones: ["Lineal", "Matricial"], respuesta: 0 },
      { pregunta: "¿Qu&eacute; estructura combina funciones y proyectos?", opciones: ["Funcional", "Matricial"], respuesta: 1 },
    ],
  },
  proceso: {
    titulo: "Proceso de Organizaci&oacute;n",
    contenido: `
      <p><strong>Identificar objetivos:</strong> Saber qu&eacute; se quiere lograr.</p>
      <p><strong>Dividir el trabajo:</strong> Asignar tareas y responsabilidades.</p>
      <p><strong>Agrupar actividades:</strong> Crear departamentos o &aacute;reas.</p>
    `,
    preguntas: [
      { pregunta: "¿Cu&aacute;l es el primer paso del proceso de organizaci&oacute;n?", opciones: ["Identificar objetivos", "Dividir el trabajo"], respuesta: 0 },
      { pregunta: "¿Qu&eacute; paso sigue despu&eacute;s de dividir el trabajo?", opciones: ["Agrupar actividades", "Asignar recursos"], respuesta: 0 },
    ],
  },
  herramientas: {
    titulo: "Herramientas de Organizaci&oacute;n",
    contenido: `
      <p><strong>Organigramas:</strong> Representaci&oacute;n gr&aacute;fica de la estructura de la empresa.</p>
      <p><strong>Manuales de procedimientos:</strong> Documentos que describen c&oacute;mo realizar tareas.</p>
      <p><strong>Flujogramas:</strong> Diagramas que muestran el flujo de procesos.</p>
    `,
    preguntas: [
      { pregunta: "¿Qu&eacute; herramienta representa la estructura de la empresa?", opciones: ["Organigrama", "Flujograma"], respuesta: 0 },
      { pregunta: "¿Qu&eacute; herramienta muestra el flujo de procesos?", opciones: ["Organigrama", "Flujograma"], respuesta: 1 },
    ],
  },
  desafios: {
    titulo: "Desaf&iacute;os en la Organizaci&oacute;n",
    contenido: `
      <p><strong>Resistencia al cambio:</strong> Los empleados pueden oponerse a nuevas estructuras.</p>
      <p><strong>Comunicaci&oacute;n ineficiente:</strong> Falta de claridad en la transmisi&oacute;n de informaci&oacute;n.</p>
      <p><strong>Rigidez organizacional:</strong> Estructuras que no se adaptan a cambios.</p>
    `,
    preguntas: [
      { pregunta: "¿Qu&eacute; es la resistencia al cambio?", opciones: ["Oposici&oacute;n a nuevas estructuras", "Adaptaci&oacute;n r&aacute;pida"], respuesta: 0 },
      { pregunta: "¿Qu&eacute; problema surge por falta de claridad en la comunicaci&oacute;n?", opciones: ["Comunicaci&oacute;n ineficiente", "Flexibilidad"], respuesta: 0 },
    ],
  },
  tendencias: {
    titulo: "Tendencias Modernas",
    contenido: `
      <p><strong>Organizaciones horizontales:</strong> Menos niveles jer&aacute;rquicos y m&aacute;s autonom&iacute;a.</p>
      <p><strong>Teletrabajo y equipos remotos:</strong> Flexibilidad en la ubicaci&oacute;n f&iacute;sica.</p>
      <p><strong>Agilidad organizacional:</strong> Capacidad de adaptarse r&aacute;pidamente a cambios.</p>
    `,
    preguntas: [
      { pregunta: "¿Qu&eacute; caracteriza a las organizaciones horizontales?", opciones: ["Menos niveles jer&aacute;rquicos", "M&aacute;s niveles jer&aacute;rquicos"], respuesta: 0 },
      { pregunta: "¿Qu&eacute; permite el teletrabajo?", opciones: ["Flexibilidad", "Rigidez"], respuesta: 0 },
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
