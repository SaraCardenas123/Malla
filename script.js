const ramos = {
  // Estructura: id: { nombre, prerequisitos, desbloquea }
  "calculo1": {
    nombre: "Cálculo diferencial",
    prerequisitos: [],
    desbloquea: ["algebra", "taller-herr", "mecanica", "eco-gral"]
  },
  "sociologia": {
    nombre: "Sociología industrial",
    prerequisitos: [],
    desbloquea: []
  },
  "intro-ing": {
    nombre: "Introducción a la ingeniería industrial",
    prerequisitos: [],
    desbloquea: ["taller-herr", "eco-gral"]
  },
  "prog": {
    nombre: "Programación de computadores",
    prerequisitos: [],
    desbloquea: ["prog-oo"]
  },
  "integral": {
    nombre: "Cálculo Integral",
    prerequisitos: ["calculo1"],
    desbloquea: ["varias", "elecmag", "ecuaciones", "prob"]
  },
  "algebra": {
    nombre: "Álgebra lineal",
    prerequisitos: ["calculo1"],
    desbloquea: ["ecuaciones", "optimizacion"]
  },
  "invencion": {
    nombre: "Taller de invención y creatividad",
    prerequisitos: [],
    desbloquea: ["gestion-emp"]
  },
  "prog-oo": {
    nombre: "Programación orientada a objetos",
    prerequisitos: ["prog"],
    desbloquea: ["taller-herr"]
  },
  "eco-gral": {
    nombre: "Economía general",
    prerequisitos: ["calculo1", "intro-ing"],
    desbloquea: ["gestion-emp"]
  },
  "taller-herr": {
    nombre: "Taller de herramientas en Ing.",
    prerequisitos: ["calculo1", "intro-ing", "prog-oo"],
    desbloquea: ["costos", "modelos"]
  },
  "mecanica": {
    nombre: "Fundamentos de mecánica",
    prerequisitos: ["calculo1"],
    desbloquea: ["materiales"]
  },
  "prob": {
    nombre: "Probabilidad fundamental",
    prerequisitos: ["integral"],
    desbloquea: ["modelos", "inferencia"]
  },
  "varias": {
    nombre: "Cálculo en varias variables",
    prerequisitos: ["integral"],
    desbloquea: ["eco-riesgo", "optimizacion", "modelos"]
  },
  "elecmag": {
    nombre: "Fundamentos de electricidad",
    prerequisitos: ["integral"],
    desbloquea: ["seguridad"]
  },
  "ecuaciones": {
    nombre: "Ecuaciones diferenciales",
    prerequisitos: ["algebra", "integral"],
    desbloquea: ["modelos"]
  },
  "costos": {
    nombre: "Sistema de costos",
    prerequisitos: ["taller-herr"],
    desbloquea: ["eco-riesgo"]
  },
  "gestion-emp": {
    nombre: "Gestión empresarial",
    prerequisitos: ["eco-gral", "invencion"],
    desbloquea: []
  },
  "materiales": {
    nombre: "Taller ciencia y materiales",
    prerequisitos: ["mecanica"],
    desbloquea: ["quimico"]
  },
  "modelos": {
    nombre: "Modelos y simulación",
    prerequisitos: ["ecuaciones", "varias", "taller-herr", "prob"],
    desbloquea: ["estocasticos"]
  },
  "optimizacion": {
    nombre: "Optimización",
    prerequisitos: ["varias", "algebra"],
    desbloquea: ["ergonomia", "estocasticos"]
  },
  "eco-riesgo": {
    nombre: "Ingeniería económica",
    prerequisitos: ["varias", "costos"],
    desbloquea: ["finanzas"]
  },
  "quimico": {
    nombre: "Taller procesos químicos",
    prerequisitos: ["materiales"],
    desbloquea: []
  },
  "metal": {
    nombre: "Taller metalmecánicos",
    prerequisitos: [],
    desbloquea: ["ergonomia"]
  },
  "inferencia": {
    nombre: "Inferencia estadística",
    prerequisitos: ["prob"],
    desbloquea: ["calidad", "estocasticos", "investigacion"]
  },
  "estocasticos": {
    nombre: "Modelos estocásticos",
    prerequisitos: ["modelos", "optimizacion", "inferencia"],
    desbloquea: ["simulacion", "produccion"]
  },
  "finanzas": {
    nombre: "Finanzas",
    prerequisitos: ["eco-riesgo"],
    desbloquea: []
  },
  "ergonomia": {
    nombre: "Taller ergonomía",
    prerequisitos: ["optimizacion", "metal"],
    desbloquea: ["produccion"]
  },
  "calidad": {
    nombre: "Control y gestión de calidad",
    prerequisitos: ["inferencia"],
    desbloquea: []
  },
  "simulacion": {
    nombre: "Taller de simulación",
    prerequisitos: ["estocasticos"],
    desbloquea: ["logistica"]
  },
  "produccion": {
    nombre: "Taller ingeniería de la producción",
    prerequisitos: ["ergonomia", "estocasticos"],
    desbloquea: ["plantas"]
  },
  "gestion-proy": {
    nombre: "Gerencia y gestión de proyectos",
    prerequisitos: ["eco-riesgo"],
    desbloquea: ["info"]
  },
  "info": {
    nombre: "Sistemas de información",
    prerequisitos: ["gestion-proy"],
    desbloquea: ["plantas", "gestion-tec"]
  },
  "seguridad": {
    nombre: "Seguridad industrial",
    prerequisitos: ["elecmag"],
    desbloquea: ["plantas"]
  },
  "plantas": {
    nombre: "Taller de diseño de plantas",
    prerequisitos: ["produccion", "info", "seguridad"],
    desbloquea: []
  },
  "logistica": {
    nombre: "Logística",
    prerequisitos: ["simulacion"],
    desbloquea: []
  },
  "gestion-tec": {
    nombre: "Gestión tecnológica",
    prerequisitos: ["info"],
    desbloquea: []
  },
  "recursos": {
    nombre: "Gerencia de recursos humanos",
    prerequisitos: [],
    desbloquea: []
  },
  "investigacion": {
    nombre: "Metodología de la investigación",
    prerequisitos: ["inferencia"],
    desbloquea: []
  },
  "trabajo": {
    nombre: "Trabajo de grado",
    prerequisitos: [],
    desbloquea: []
  }
};

const estadoRamos = {}; // estado de cada ramo (true = aprobado)

function crearRamo(id, data) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = data.nombre;
  div.id = id;
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
  const contenedor = document.getElementById("malla");
  Object.entries(ramos).forEach(([id, data]) => {
    estadoRamos[id] = false;
    contenedor.appendChild(crearRamo(id, data));
  });
  actualizarRamos();
};

