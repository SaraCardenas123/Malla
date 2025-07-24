const ramos = {
  calculo_diferencial: {
    nombre: "Cálculo Diferencial",
    creditos: 4,
    semestre: 1,
    prerequisitos: [],
    componente: "fund"
  },
  sociologia: {
    nombre: "Sociología especial: industrial y del trabajo",
    creditos: 3,
    semestre: 1,
    prerequisitos: [],
    componente: "disc"
  },
  introduccion: {
    nombre: "Introducción a la Ingeniería Industrial",
    creditos: 3,
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
  taller_invencion: {
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
    componente: "fund"
  },
  libre_2: {
    nombre: "Libre elección",
    creditos: 2,
    semestre: 2,
    prerequisitos: [],
    componente: "opt"
  },
  calculo_varias: {
    nombre: "Cálculo en Varias Variables",
    creditos: 4,
    semestre: 3,
    prerequisitos: ["calculo_integral"],
    componente: "fund"
  },
  mecanica: {
    nombre: "Fundamentos de Mecánica",
    creditos: 3,
    semestre: 3,
    prerequisitos: ["calculo_diferencial"],
    componente: "disc"
  },
  economia: {
    nombre: "Economía General",
    creditos: 3,
    semestre: 3,
    prerequisitos: ["introduccion"],
    componente: "disc"
  },
  taller_herramientas: {
    nombre: "Taller de Herramientas y Problemas",
    creditos: 2,
    semestre: 3,
    prerequisitos: ["introduccion", "calculo_diferencial", "poo"],
    componente: "disc"
  },
  probabilidad: {
    nombre: "Probabilidad Fundamental",
    creditos: 3,
    semestre: 3,
    prerequisitos: ["calculo_integral"],
    componente: "fund"
  },
  ecuaciones: {
    nombre: "Ecuaciones Diferenciales",
    creditos: 3,
    semestre: 4,
    prerequisitos: ["calculo_integral", "algebra_lineal"],
    componente: "fund"
  },
  electricidad: {
    nombre: "Fundamentos de Electricidad y Magnetismo",
    creditos: 3,
    semestre: 4,
    prerequisitos: ["calculo_integral"],
    componente: "disc"
  },
  costos: {
    nombre: "Sistema de Costos",
    creditos: 3,
    semestre: 4,
    prerequisitos: ["taller_herramientas"],
    componente: "disc"
  },
  gestion: {
    nombre: "Gestión Empresarial",
    creditos: 3,
    semestre: 4,
    prerequisitos: ["economia", "taller_invencion"],
    componente: "disc"
  },
  taller_materiales: {
    nombre: "Taller Ciencia y Tecnología Materiales",
    creditos: 2,
    semestre: 4,
    prerequisitos: ["mecanica"],
    componente: "disc"
  },
  modelos: {
    nombre: "Modelos y Simulación",
    creditos: 3,
    semestre: 5,
    prerequisitos: ["probabilidad", "taller_herramientas", "ecuaciones", "calculo_varias"],
    componente: "disc"
  },
  optimizacion: {
    nombre: "Optimización",
    creditos: 3,
    semestre: 5,
    prerequisitos: ["algebra_lineal", "calculo_varias"],
    componente: "fund"
  },
  ingenieria_economica: {
    nombre: "Ing. Económica y Análisis de Riesgo",
    creditos: 3,
    semestre: 5,
    prerequisitos: ["costos", "calculo_varias"],
    componente: "disc"
  },
  taller_quimica: {
    nombre: "Taller de Procesos Químicos y Biotecnológicos",
    creditos: 2,
    semestre: 5,
    prerequisitos: ["taller_materiales"],
    componente: "disc"
  },
  taller_metal: {
    nombre: "Taller Procesos Metalmecánicos",
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
  modelos_estocasticos: {
    nombre: "Modelos Estocásticos",
    creditos: 3,
    semestre: 6,
    prerequisitos: ["modelos", "optimizacion", "inferencia"],
    componente: "disc"
  },
  gerencia_proyectos: {
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
    prerequisitos: ["ingenieria_economica"],
    componente: "disc"
  },
  taller_ergonomia: {
    nombre: "Taller Ergonomía e Ing. Métodos",
    creditos: 3,
    semestre: 6,
    prerequisitos: ["optimizacion", "taller_metal"],
    componente: "disc"
  },
  calidad: {
    nombre: "Control y Gestión de Calidad",
    creditos: 3,
    semestre: 6,
    prerequisitos: ["inferencia"],
    componente: "disc"
  },
  taller_simulacion: {
    nombre: "Taller Simulación Procesos",
    creditos: 3,
    semestre: 7,
    prerequisitos: ["modelos_estocasticos"],
    componente: "disc"
  },
  sistemas_info: {
    nombre: "Sistemas de Información",
    creditos: 3,
    semestre: 7,
    prerequisitos: ["gerencia_proyectos"],
    componente: "disc"
  },
  seguridad: {
    nombre: "Seguridad Industrial",
    creditos: 2,
    semestre: 7,
    prerequisitos: ["electricidad"],
    componente: "disc"
  },
  taller_produccion: {
    nombre: "Taller de Ingeniería de la Producción",
    creditos: 3,
    semestre: 7,
    prerequisitos: ["modelos_estocasticos", "taller_ergonomia"],
    componente: "disc"
  },
  logistica: {
    nombre: "Logística",
    creditos: 3,
    semestre: 8,
    prerequisitos: ["taller_simulacion"],
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
  taller_plantas: {
    nombre: "Taller de Diseño de Plantas",
    creditos: 3,
    semestre: 8,
    prerequisitos: ["sistemas_info", "taller_produccion", "seguridad"],
    componente: "disc"
  },
  libre_9: {
    nombre: "Libre elección",
    creditos: 2,
    semestre: 9,
    prerequisitos: [],
    componente: "opt"
  },
  libre_10: {
    nombre: "Libre elección",
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
    componente: "trab"
  }
};

const lineas = [];
const estadoRamos = {};

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
