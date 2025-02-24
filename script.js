// Datos de los temas y preguntas aleatorias
const temas = {
  introduccion: {
    titulo: "Introducci�n a la Organizaci�n",
    contenido: `
      <p><strong>Definici�n:</strong> La organizaci�n es el proceso de estructurar y coordinar los recursos (humanos, materiales, financieros y tecnol�gicos) para alcanzar los objetivos de una empresa de manera eficiente.</p>
      <p><strong>Importancia:</strong> Permite optimizar el uso de recursos, mejorar la productividad y facilitar la toma de decisiones.</p>
      <p><strong>Relaci�n con la administraci�n:</strong> Es una de las funciones b�sicas de la administraci�n (junto con la planificaci�n, direcci�n y control).</p>
    `,
    preguntas: [
      { pregunta: "�Qu� es la organizaci�n?", opciones: ["Estructurar recursos", "Planificar estrategias"], respuesta: 0 },
      { pregunta: "�Qu� permite la organizaci�n?", opciones: ["Optimizar recursos", "Aumentar costos"], respuesta: 0 },
    ],
  },
  principios: {
    titulo: "Principios de la Organizaci�n",
    contenido: `
      <p><strong>Divisi�n del trabajo:</strong> Asignar tareas espec�ficas a cada persona o departamento.</p>
      <p><strong>Unidad de mando:</strong> Cada empleado debe reportar a un solo supervisor.</p>
      <p><strong>Jerarqu�a:</strong> Establecer niveles de autoridad y responsabilidad.</p>
    `,
    preguntas: [
      { pregunta: "�Qu� es la divisi�n del trabajo?", opciones: ["Asignar tareas", "Centralizar decisiones"], respuesta: 0 },
      { pregunta: "�Qu� principio establece que cada empleado debe reportar a un solo supervisor?", opciones: ["Unidad de mando", "Jerarqu�a"], respuesta: 0 },
    ],
  },
  estructuras: {
    titulo: "Tipos de Estructuras",
    contenido: `
      <p><strong>Estructura lineal:</strong> L�neas claras de autoridad y responsabilidad (piramidal).</p>
      <p><strong>Estructura funcional:</strong> Organizada por �reas especializadas (finanzas, marketing, etc.).</p>
      <p><strong>Estructura matricial:</strong> Combina departamentos funcionales con equipos de proyectos.</p>
    `,
    preguntas: [
      { pregunta: "�Qu� estructura es piramidal?", opciones: ["Lineal", "Matricial"], respuesta: 0 },
      { pregunta: "�Qu� estructura combina funciones y proyectos?", opciones: ["Funcional", "Matricial"], respuesta: 1 },
    ],
  },
  proceso: {
    titulo: "Proceso de Organizaci�n",
    contenido: `
      <p><strong>Identificar objetivos:</strong> Saber qu� se quiere lograr.</p>
      <p><strong>Dividir el trabajo:</strong> Asignar tareas y responsabilidades.</p>
      <p><strong>Agrupar actividades:</strong> Crear departamentos o �reas.</p>
    `,
    preguntas: [
      { pregunta: "�Cu�l es el primer paso del proceso de organizaci�n?", opciones: ["Identificar objetivos", "Dividir el trabajo"], respuesta: 0 },
      { pregunta: "�Qu� paso sigue despu�s de dividir el trabajo?", opciones: ["Agrupar actividades", "Asignar recursos"], respuesta: 0 },
    ],
  },
  herramientas: {
    titulo: "Herramientas de Organizaci�n",
    contenido: `
      <p><strong>Organigramas:</strong> Representaci�n gr�fica de la estructura de la empresa.</p>
      <p><strong>Manuales de procedimientos:</strong> Documentos que describen c�mo realizar tareas.</p>
      <p><strong>Flujogramas:</strong> Diagramas que muestran el flujo de procesos.</p>
    `,
    preguntas: [
      { pregunta: "�Qu� herramienta representa la estructura de la empresa?", opciones: ["Organigrama", "Flujograma"], respuesta: 0 },
      { pregunta: "�Qu� herramienta muestra el flujo de procesos?", opciones: ["Organigrama", "Flujograma"], respuesta: 1 },
    ],
  },
  desafios: {
    titulo: "Desaf�os en la Organizaci�n",
    contenido: `
      <p><strong>Resistencia al cambio:</strong> Los empleados pueden oponerse a nuevas estructuras.</p>
      <p><strong>Comunicaci�n ineficiente:</strong> Falta de claridad en la transmisi�n de informaci�n.</p>
      <p><strong>Rigidez organizacional:</strong> Estructuras que no se adaptan a cambios.</p>
    `,
    preguntas: [
      { pregunta: "�Qu� es la resistencia al cambio?", opciones: ["Oposici�n a nuevas estructuras", "Adaptaci�n r�pida"], respuesta: 0 },
      { pregunta: "�Qu� problema surge por falta de claridad en la comunicaci�n?", opciones: ["Comunicaci�n ineficiente", "Flexibilidad"], respuesta: 0 },
    ],
  },
  tendencias: {
    titulo: "Tendencias Modernas",
    contenido: `
      <p><strong>Organizaciones horizontales:</strong> Menos niveles jer�rquicos y m�s autonom�a.</p>
      <p><strong>Teletrabajo y equipos remotos:</strong> Flexibilidad en la ubicaci�n f�sica.</p>
      <p><strong>Agilidad organizacional:</strong> Capacidad de adaptarse r�pidamente a cambios.</p>
    `,
    preguntas: [
      { pregunta: "�Qu� caracteriza a las organizaciones horizontales?", opciones: ["Menos niveles jer�rquicos", "M�s niveles jer�rquicos"], respuesta: 0 },
      { pregunta: "�Qu� permite el teletrabajo?", opciones: ["Flexibilidad", "Rigidez"], respuesta: 0 },
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

// Funci�n para mostrar el tema y el cuestionario
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

// Funci�n para verificar la respuesta
function verificarRespuesta(respuestaCorrecta) {
  const seleccionada = document.querySelector('input[name="pregunta"]:checked');
  if (seleccionada && parseInt(seleccionada.value) === respuestaCorrecta) {
    document.getElementById('resultado').textContent = "�Correcto!";
  } else {
    document.getElementById('resultado').textContent = "Incorrecto. Intenta de nuevo.";
  }
}

// Volver a la galer�a
document.getElementById('volver').addEventListener('click', () => {
  document.getElementById('galeria').classList.remove('hidden');
  document.getElementById('contenido').classList.add('hidden');
});