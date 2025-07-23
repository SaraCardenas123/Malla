// script.js

const ramos = {
  "calculo1": { nombre: "Cálculo diferencial", semestre: 1, creditos: 4, componente: "fund", prerequisitos: [], desbloquea: ["algebra", "taller-herr", "mecanica", "eco-gral"] },
  "sociologia": { nombre: "Sociología industrial", semestre: 1, creditos: 3, componente: "disc", prerequisitos: [], desbloquea: [] },
  "intro-ing": { nombre: "Introducción a la ingeniería", semestre: 1, creditos: 3, componente: "disc", prerequisitos: [], desbloquea: ["taller-herr", "eco-gral"] },
  "prog": { nombre: "Programación de computadores", semestre: 1, creditos: 3, componente: "fund", prerequisitos: [], desbloquea: ["prog-oo"] },

  "integral": { nombre: "Cálculo Integral", semestre: 2, creditos: 4, componente: "fund", prerequisitos: ["calculo1"], desbloquea: ["varias", "elecmag", "ecuaciones", "prob"] },
  "algebra": { nombre: "Álgebra lineal", semestre: 2, creditos: 4, componente: "fund", prerequisitos: ["calculo1"], desbloquea: ["ecuaciones", "optimizacion"] },
  "invencion": { nombre: "Taller de invención", semestre: 2, creditos: 3, componente: "disc", prerequisitos: [], desbloquea: ["gestion-emp"] },
  "prog-oo": { nombre: "Programación OO", semestre: 2, creditos: 3, componente: "fund", prerequisitos: ["prog"], desbloquea: ["taller-herr"] },

  "eco-gral": { nombre: "Economía general", semestre: 3, creditos: 3, componente: "opt", prerequisitos: ["calculo1", "intro-ing"], desbloquea: ["gestion-emp"] },
  "taller-herr": { nombre: "Taller herramientas", semestre: 3, creditos: 3, componente: "disc", prerequisitos: ["calculo1", "intro-ing", "prog-oo"], desbloquea: ["costos", "modelos"] },
  "mecanica": { nombre: "Fund. de mecánica", semestre: 3, creditos: 4, componente: "fund", prerequisitos: ["calculo1"], desbloquea: ["materiales"] },
  "varias": { nombre: "Cálculo varias variables", semestre: 3, creditos: 4, componente: "fund", prerequisitos: ["integral"], desbloquea: ["eco-riesgo", "optimizacion", "modelos"] },
  "prob": { nombre: "Probabilidad fundamental", semestre: 3, creditos: 4, componente: "fund", prerequisitos: ["integral"], desbloquea: ["modelos", "inferencia"] },

  "ecuaciones": { nombre: "Ecuaciones diferenciales", semestre: 4, creditos: 4, componente: "fund", prerequisitos: ["algebra", "integral"], desbloquea: ["modelos"] },
  "elecmag": { nombre: "Electricidad y magnetismo", semestre: 4, creditos: 4, componente: "fund", prerequisitos: ["integral"], desbloquea: ["seguridad"] },
  "costos": { nombre: "Sistema de costos", semestre: 4, creditos: 4, componente: "opt", prerequisitos: ["taller-herr"], desbloquea: ["eco-riesgo"] },
  "gestion-emp": { nombre: "Gestión empresarial", semestre: 4, creditos: 3, componente: "opt", prerequisitos: ["eco-gral", "invencion"], desbloquea: [] },
  "materiales": { nombre: "Ciencia de materiales", semestre: 4, creditos: 4, componente: "disc", prerequisitos: ["mecanica"], desbloquea: ["quimico"] },

  "modelos": { nombre: "Modelos y simulación", semestre: 5, creditos: 3, componente: "opt", prerequisitos: ["ecuaciones", "varias", "taller-herr", "prob"], desbloquea: ["estocasticos"] },
  "optimizacion": { nombre: "Optimización", semestre: 5, creditos: 3, componente: "opt", prerequisitos: ["varias", "algebra"], desbloquea: ["ergonomia", "estocasticos"] },
  "eco-riesgo": { nombre: "Ingeniería económica", semestre: 5, creditos: 3, componente: "opt", prerequisitos: ["costos", "varias"], desbloquea: ["finanzas"] },
  "quimico": { nombre: "Procesos químicos", semestre: 5, creditos: 3, componente: "disc", prerequisitos: ["materiales"], desbloquea: [] },
  "metal": { nombre: "Procesos metalmecánicos", semestre: 5, creditos: 3, componente: "disc", prerequisitos: [], desbloquea: ["ergonomia"] },
  "inferencia": { nombre: "Inferencia estadística", semestre: 5, creditos: 4, componente: "fund", prerequisitos: ["prob"], desbloquea: ["calidad", "estocasticos", "investigacion"] },

  "estocasticos": { nombre: "Modelos estocásticos", semestre: 6, creditos: 3, componente: "disc", prerequisitos: ["modelos", "optimizacion", "inferencia"], desbloquea: ["simulacion", "produccion"] },
  "gestion-proy": { nombre: "Gestión de proyectos", semestre: 6, creditos: 3, componente: "opt", prerequisitos: ["eco-riesgo"], desbloquea: ["info"] },
  "finanzas": { nombre: "Finanzas", semestre: 6, creditos: 3, componente: "opt", prerequisitos: ["eco-riesgo"], desbloquea: [] },
  "ergonomia": { nombre: "Ergonomía", semestre: 6, creditos: 4, componente: "disc", prerequisitos: ["optimizacion", "metal"], desbloquea: ["produccion"] },
  "calidad": { nombre: "Gestión de calidad", semestre: 6, creditos: 3, componente: "opt", prerequisitos: ["inferencia"], desbloquea: [] },

  "simulacion": { nombre: "Simulación", semestre: 7, creditos: 3, componente: "disc", prerequisitos: ["estocasticos"], desbloquea: ["logistica"] },
  "info": { nombre: "Sistemas de información", semestre: 7, creditos: 3, componente: "opt", prerequisitos: ["gestion-proy"], desbloquea: ["plantas", "gestion-tec"] },
  "seguridad": { nombre: "Seguridad industrial", semestre: 7, creditos: 3, componente: "disc", prerequisitos: ["elecmag"], desbloquea: ["plantas"] },
  "produccion": { nombre: "Ing. de producción", semestre: 7, creditos: 4, componente: "disc", prerequisitos: ["ergonomia", "estocasticos"], desbloquea: ["plantas"] },

  "logistica": { nombre: "Logística", semestre: 8, creditos: 3, componente: "disc", prerequisitos: ["simulacion"], desbloquea: [] },
  "gestion-tec": { nombre: "Gestión tecnológica", semestre: 8, creditos: 3, componente: "opt", prerequisitos: ["info"], desbloquea: [] },
  "recursos": { nombre: "Recursos humanos", semestre: 8, creditos: 3, componente: "opt", prerequisitos: [], desbloquea: [] },
  "plantas": { nombre: "Diseño de plantas", semestre: 8, creditos: 4, componente: "disc", prerequisitos: ["produccion", "info", "seguridad"], desbloquea: [] },

  "investigacion": { nombre: "Metodología investigación", semestre: 9, creditos: 3, componente: "disc", prerequisitos: ["inferencia"], desbloquea: [] },
  "trabajo": { nombre: "Trabajo de grado", semestre: 10, creditos: 6, componente: "trab", prerequisitos: [], desbloquea: [] },
};

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
      elem.classList.remove("bloqueado");
    } else {
      elem.classList.remove("aprobado");
      elem.classList.add("bloqueado");
      estadoRamos[id] = false;
    }
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
};
