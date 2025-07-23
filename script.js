// script.js

const ramos = {
  // Primer semestre
  calculo_diferencial: {
    nombre: "Cálculo Diferencial",
    creditos: 4,
    semestre: 1,
    prerequisitos: [],
    componente: "fund"
  },
  sociologia: {
    nombre: "Sociología Especial",
    creditos: 2,
    semestre: 1,
    prerequisitos: [],
    componente: "fund"
  },
  intro_ingenieria: {
    nombre: "Introducción a la Ingeniería Industrial",
    creditos: 2,
    semestre: 1,
    prerequisitos: [],
    componente: "fund"
  },
  programacion: {
    nombre: "Programación de Computadores",
    creditos: 3,
    semestre: 1,
    prerequisitos: [],
    componente: "fund"
  },

  // Segundo semestre
  calculo_integral: {
    nombre: "Cálculo Integral",
    creditos: 4,
    semestre: 2,
    prerequisitos: ["calculo_diferencial"],
    componente: "fund"
  },
  algebra_lineal: {
    nombre: "Álgebra Lineal",
    creditos: 3,
    semestre: 2,
    prerequisitos: ["calculo_diferencial"],
    componente: "fund"
  },
  creatividad: {
    nombre: "Taller de Invención y Creatividad",
    creditos: 2,
    semestre: 2,
    prerequisitos: [],
    componente: "disc"
  },
  poo: {
    nombre: "Programación Orientada a Objetos",
    creditos: 3,
    semestre: 2,
    prerequisitos: ["programacion"],
    componente: "disc"
  },
  eleccion2: {
    nombre: "Libre Elección",
    creditos: 2,
    semestre: 2,
    prerequisitos: [],
    componente: "opt"
  },

  // Tercer semestre
  calculo_varias: {
    nombre: "Cálculo en Varias Variables",
    creditos: 3,
    semestre: 3,
    prerequisitos: ["calculo_integral"],
    componente: "fund"
  },
  mecanica: {
    nombre: "Fundamentos de Mecánica",
    creditos: 3,
    semestre: 3,
    prerequisitos: ["calculo_diferencial"],
    componente: "fund"
  },
  economia: {
    nombre: "Economía General",
    creditos: 2,
    semestre: 3,
    prerequisitos: ["intro_ingenieria"],
    componente: "fund"
  },
  taller_herramientas: {
    nombre: "Taller de Herramientas y Problemas en Ingeniería Industrial",
    creditos: 3,
    semestre: 3,
    prerequisitos: ["calculo_diferencial", "intro_ingenieria", "poo"],
    componente: "disc"
  },
  probabilidad: {
    nombre: "Probabilidad Fundamental",
    creditos: 3,
    semestre: 3,
    prerequisitos: ["calculo_integral"],
    componente: "fund"
  },

  // Cuarto semestre
  ecuaciones: {
    nombre: "Ecuaciones Diferenciales",
    creditos: 3,
    semestre: 4,
    prerequisitos: ["calculo_integral", "algebra_lineal"],
    componente: "fund"
  },
  electricidad: {
    nombre: "Fundamentos de Electricidad y Magnetismo",
    creditos: 2,
    semestre: 4,
    prerequisitos: ["calculo_integral"],
    componente: "fund"
  },
  costos: {
    nombre: "Sistema de Costos",
    creditos: 3,
    semestre: 4,
    prerequisitos: ["taller_herramientas"],
    componente: "disc"
  },
  gestion_empresarial: {
    nombre: "Gestión Empresarial",
    creditos: 2,
    semestre: 4,
    prerequisitos: ["creatividad", "economia"],
    componente: "disc"
  },
  materiales: {
    nombre: "Taller de Ciencia y Tecnología de Materiales",
    creditos: 2,
    semestre: 4,
    prerequisitos: ["mecanica"],
    componente: "disc"
  },

  // Quinto semestre
  simulacion: {
    nombre: "Modelos y Simulación",
    creditos: 4,
    semestre: 5,
    prerequisitos: ["calculo_varias", "taller_herramientas", "probabilidad", "ecuaciones"],
    componente: "disc"
  },
  optimizacion: {
    nombre: "Optimización",
    creditos: 3,
    semestre: 5,
    prerequisitos: ["algebra_lineal", "calculo_varias"],
    componente: "disc"
  },
  economia_riesgo: {
    nombre: "Ingeniería Económica y Análisis de Riesgo",
    creditos: 3,
    semestre: 5,
    prerequisitos: ["calculo_varias", "costos"],
    componente: "disc"
  },
  quimicos: {
    nombre: "Taller de Procesos Químicos y Biotecnológicos",
    creditos: 2,
    semestre: 5,
    prerequisitos: ["materiales"],
    componente: "disc"
  },
  metalmecanicos: {
    nombre: "Taller de Procesos Metalmecánicos",
    creditos: 2,
    semestre: 5,
    prerequisitos: [],
    componente: "disc"
  },
  inferencia: {
    nombre: "Inferencia Estadística Fundamental",
    creditos: 3,
    semestre: 5,
    prerequisitos: ["probabilidad"],
    componente: "fund"
  },

  // Sexto semestre
  estocasticos: {
    nombre: "Modelos Estocásticos para Procesos de Manufactura y Servicios",
    creditos: 4,
    semestre: 6,
    prerequisitos: ["simulacion", "optimizacion", "inferencia"],
    componente: "disc"
  },
  proyectos: {
    nombre: "Gerencia y Gestión de Proyectos",
    creditos: 3,
    semestre: 6,
    prerequisitos: [],
    componente: "disc"
  },
  finanzas: {
    nombre: "Finanzas",
    creditos: 3,
    semestre: 6,
    prerequisitos: ["economia_riesgo"],
    componente: "disc"
  },
  ergonomia: {
    nombre: "Taller de Ergonomía e Ingeniería de Métodos",
    creditos: 2,
    semestre: 6,
    prerequisitos: ["optimizacion", "metalmecanicos"],
    componente: "disc"
  },
  calidad: {
    nombre: "Control y Gestión de Calidad",
    creditos: 3,
    semestre: 6,
    prerequisitos: ["inferencia"],
    componente: "disc"
  },
  },

  // Séptimo semestre
  simulacion_procesos: {
    nombre: "Taller de Simulación de Procesos de Manufactura y Servicios",
    creditos: 2,
    semestre: 7,
    prerequisitos: ["estocasticos"],
    componente: "disc"
  },
  sistemas_info: {
    nombre: "Sistemas de Información",
    creditos: 3,
    semestre: 7,
    prerequisitos: ["proyectos"],
    componente: "disc"
  },
  seguridad: {
    nombre: "Seguridad Industrial",
    creditos: 2,
    semestre: 7,
    prerequisitos: ["electricidad"],
    componente: "disc"
  },
  produccion: {
    nombre: "Taller de Ingeniería de la Producción",
    creditos: 2,
    semestre: 7,
    prerequisitos: ["estocasticos", "ergonomia"],
    componente: "disc"
  },

  // Octavo semestre
  logistica: {
    nombre: "Logística",
    creditos: 3,
    semestre: 8,
    prerequisitos: ["simulacion_procesos"],
    componente: "disc"
  },
  gestion_tecnologica: {
    nombre: "Gestión Tecnológica",
    creditos: 3,
    semestre: 8,
    prerequisitos: ["sistemas_info"],
    componente: "disc"
  },
  recursos_humanos: {
    nombre: "Gerencia de Recursos Humanos",
    creditos: 2,
    semestre: 8,
    prerequisitos: [],
    componente: "disc"
  },
  diseno_plantas: {
    nombre: "Taller de Diseño de Plantas",
    creditos: 3,
    semestre: 8,
    prerequisitos: ["sistemas_info", "seguridad", "produccion"],
    componente: "disc"
  },
  eleccion8: {
    nombre: "Libre Elección",
    creditos: 2,
    semestre: 8,
    prerequisitos: [],
    componente: "opt"
  },

  // Noveno semestre
  eleccion9a: {
    nombre: "Libre Elección",
    creditos: 2,
    semestre: 9,
    prerequisitos: [],
    componente: "opt"
  },
  eleccion9b: {
    nombre: "Libre Elección",
    creditos: 2,
    semestre: 9,
    prerequisitos: [],
    componente: "opt"
  },
  eleccion9c: {
    nombre: "Libre Elección",
    creditos: 2,
    semestre: 9,
    prerequisitos: [],
    componente: "opt"
  },
  eleccion9d: {
    nombre: "Libre Elección",
    creditos: 2,
    semestre: 9,
    prerequisitos: [],
    componente: "opt"
  },

  // Décimo semestre
  eleccion10a: {
    nombre: "Libre Elección",
    creditos: 2,
    semestre: 10,
    prerequisitos: [],
    componente: "opt"
  },
  eleccion10b: {
    nombre: "Libre Elección",
    creditos: 2,
    semestre: 10,
    prerequisitos: [],
    componente: "opt"
  },
  eleccion10c: {
    nombre: "Libre Elección",
    creditos: 2,
    semestre: 10,
    prerequisitos: [],
    componente: "opt"
  },
  eleccion10d: {
    nombre: "Libre Elección",
    creditos: 2,
    semestre: 10,
    prerequisitos: [],
    componente: "opt"
  },
  trabajo_grado: {
    nombre: "Trabajo de Grado",
    creditos: 5,
    semestre: 10,
    prerequisitos: [],
    componente: "disc"
  },
const lineas = [];

function crearRamo(id, data) {
  const div = document.createElement("div");
  div.className = `ramo bloqueado ${data.componente}`;
  div.id = id;
  div.innerHTML = `<strong>${data.nombre}</strong><br><small>${data.creditos} créditos</small>`;
  div.onclick = () => {
    if (!div.classList.contains("bloqueado")) {
      div.classList.toggle("aprobado");
      estadoRamos[id] = div.classList.contains("aprobado");
      actualizarRamos();
    }
  };
  return div;
}

function actualizarRamos() {
  Object.entries(ramos).forEach(([id, data]) => {
    const elem = document.getElementById(id);
    const requisitos = data.prerequisitos;
    const aprobados = requisitos.every(req => estadoRamos[req]);

    if (aprobados || requisitos.length === 0) {
      if (!elem.classList.contains("aprobado")) {
        elem.classList.remove("bloqueado");
      }
    } else {
      elem.classList.remove("aprobado");
      if (!elem.classList.contains("bloqueado")) {
        elem.classList.add("bloqueado");
      }
      estadoRamos[id] = false;
    }
  });
}

function dibujarLineas() {
  lineas.forEach(line => line.remove());
  lineas.length = 0;

  Object.entries(ramos).forEach(([id, data]) => {
    data.prerequisitos.forEach(prereq => {
      const desde = document.getElementById(prereq);
      const hasta = document.getElementById(id);
      if (desde && hasta) {
        const linea = new LeaderLine(desde, hasta, {
          color: '#999',
          size: 2,
          path: 'straight',
          startPlug: 'disc',
          endPlug: 'arrow1'
        });
        lineas.push(linea);
      }
    });
  });
}

window.onload = () => {
  Object.entries(ramos).forEach(([id, data]) => {
    estadoRamos[id] = false;
    const div = crearRamo(id, data);
    const contenedor = document.querySelector(`#semestre${data.semestre} .contenedor-semestre`);
    if (contenedor) contenedor.appendChild(div);
  });
  actualizarRamos();
  setTimeout(() => dibujarLineas(), 500);
};
