const estadoRamos = {};

// Objeto con los ramos — reemplaza esto con tu versión completa si gustas
const ramos = {
  "Cálculo Diferencial": {
    semestre: 1, creditos: 4, prerequisitos: [],
    desbloquea: ["Álgebra Lineal"]
  },
  "Álgebra Lineal": {
    semestre: 2, creditos: 3, prerequisitos: ["Cálculo Diferencial"]
  }
  // ➤ Continúa con tus ramos completos
};

function crearCaja(nombre, datos) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.id = nombre;
  div.innerHTML = `<strong>${nombre}</strong><br><span>${datos.creditos} créditos</span>`;

  // Insertar en el semestre correspondiente
  const container = document.querySelector(`#semestre${datos.semestre} .contenedor-semestre`);
  if (container) container.appendChild(div);

  // Evaluar si debe estar desbloqueado por prerrequisitos
  if (datos.prerequisitos.length === 0 || datos.prerequisitos.every(pre => estadoRamos[pre])) {
    div.classList.remove("bloqueado");
  }

  // Aplicar estado aprobado si ya estaba guardado
  if (estadoRamos[nombre]) {
    div.classList.add("aprobado");
    div.classList.remove("bloqueado");
  }

  // Evento al hacer clic
  div.onclick = () => {
    if (estadoRamos[nombre]) return; // ya aprobado

    estadoRamos[nombre] = true;
    div.classList.add("aprobado");
    div.classList.remove("bloqueado");

    // Guardar en localStorage
    localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));

    // Revisar si se desbloquean otros ramos
    Object.entries(ramos).forEach(([destino, datosDestino]) => {
      if (
        !estadoRamos[destino] &&
        datosDestino.prerequisitos.every(pre => estadoRamos[pre])
      ) {
        const destDiv = document.getElementById(destino);
        if (destDiv) destDiv.classList.remove("bloqueado");
      }
    });
  };
}

window.onload = () => {
  // Recuperar el estado desde localStorage
  const estadoGuardado = localStorage.getItem("estadoRamos");
  if (estadoGuardado) {
    const parsed = JSON.parse(estadoGuardado);
    Object.assign(estadoRamos, parsed);
  }

  // Crear todas las cajas
  Object.entries(ramos).forEach(([nombre, datos]) => {
    crearCaja(nombre, datos);
  });
};
