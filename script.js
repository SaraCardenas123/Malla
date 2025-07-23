// script.js

const ramos = {
  "calculo1": {
    nombre: "Cálculo diferencial",
    semestre: 1,
    prerequisitos: [],
    desbloquea: ["algebra", "taller-herr", "mecanica", "eco-gral"]
  },
  "sociologia": {
    nombre: "Sociología industrial",
    semestre: 1,
    prerequisitos: [],
    desbloquea: []
  },
  "intro-ing": {
    nombre: "Introducción a la ingeniería",
    semestre: 1,
    prerequisitos: [],
    desbloquea: ["taller-herr", "eco-gral"]
  },
  "prog": {
    nombre: "Programación de computadores",
    semestre: 1,
    prerequisitos: [],
    desbloquea: ["prog-oo"]
  },
  "integral": {
    nombre: "Cálculo Integral",
    semestre: 2,
    prerequisitos: ["calculo1"],
    desbloquea: ["varias", "elecmag", "ecuaciones", "prob"]
  },
  "algebra": {
    nombre: "Álgebra lineal",
    semestre: 2,
    prerequisitos: ["calculo1"],
    desbloquea: ["ecuaciones", "optimizacion"]
  },
  "invencion": {
    nombre: "Taller de invención",
    semestre: 2,
    prerequisitos: [],
    desbloquea: ["gestion-emp"]
  },
  "prog-oo": {
    nombre: "Programación OO",
    semestre: 2,
    prerequisitos: ["prog"],
    desbloquea: ["taller-herr"]
  },
  "eco-gral": {
    nombre: "Economía general",
    semestre: 3,
    prerequisitos: ["calculo1", "intro-ing"],
    desbloquea: ["gestion-emp"]
  },
  "taller-herr": {
    nombre: "Taller herramientas",
    semestre: 3,
    prerequisitos: ["calculo1", "intro-ing", "prog-oo"],
    desbloquea: ["costos", "modelos"]
  },
  "mecanica": {
    nombre: "Fund. de mecánica",
    semestre: 3,
    prerequisitos: ["calculo1"],
    desbloquea: ["materiales"]
  },
  // Agregar más ramos según lo definido...
};

const estadoRamos = {};

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
  Object.entries(ramos).forEach(([id, data]) => {
    estadoRamos[id] = false;
    const div = crearRamo(id, data);
    const contenedor = document.querySelector(`#semestre${data.semestre} .contenedor-semestre`);
    if (contenedor) contenedor.appendChild(div);
  });
  actualizarRamos();
};

