const estadoRamos = {};

const ramos = {
  // ... Usa aquí tu objeto completo de ramos ya corregido ...
  "Cálculo Diferencial": {
    semestre: 1, creditos: 4, prerequisitos: [],
    desbloquea: ["Álgebra Lineal", "Taller de Herramientas y Problemas", "Fundamentos de Mecánica", "Economía General", "Cálculo Integral"]
  },
  "Sociología especial: industrial y del trabajo": {
    semestre: 1, creditos: 3, prerequisitos: []
  },
  // (continúa con los demás como ya los tienes)
};

function crearCaja(nombre, datos) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.id = nombre;
  div.innerHTML = `<strong>${nombre}</strong><br><span>${datos.creditos} créditos</span>`;

  const container = document.querySelector(`#semestre${datos.semestre} .contenedor-semestre`);
  if (container) container.appendChild(div);

  // Estado inicial
  const aprobado = estadoRamos[nombre];
  if (aprobado) {
    div.classList.add("aprobado");
    div.classList.remove("bloqueado");
    estadoRamos[nombre] = true;
  } else if (datos.prerequisitos.length === 0) {
    div.classList.remove("bloqueado");
    estadoRamos[nombre] = false;
  }

  div.onclick = () => {
    if (estadoRamos[nombre]) return;

    // Marcar como aprobado
    estadoRamos[nombre] = true;
    div.classList.add("aprobado");

    // Guardar en localStorage
    localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));

    // Desbloquear ramos dependientes
    Object.entries(ramos).forEach(([destino, datosDestino]) => {
      if (
        !estadoRamos[destino] &&
        datosDestino.prerequisitos.every((pre) => estadoRamos[pre])
      ) {
        const destDiv = document.getElementById(destino);
        if (destDiv) destDiv.classList.remove("bloqueado");
      }
    });
  };
}

window.onload = () => {
  // Recuperar estado guardado
  const estadoGuardado = localStorage.getItem("estadoRamos");
  if (estadoGuardado) {
    Object.assign(estadoRamos, JSON.parse(estadoGuardado));
  }

  // Crear ramos
  Object.entries(ramos).forEach(([nombre, datos]) => {
    crearCaja(nombre, datos);
  });
};
