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
      { pregunta: "¿Qué caracteriza a las organizaciones horizontales?", opciones: ["Menos niveles jerárquicos", "Más niveles jerárqu
