const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos")) || {};

function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
}

function crearCaja(nombre, datos) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.id = nombre;
  div.innerHTML = `<strong>${nombre}</strong><br><span>${datos.creditos} créditos</span>`;
  const container = document.querySelector(`#semestre${datos.semestre} .contenedor-semestre`);
  if (container) container.appendChild(div);

  if (datos.prerequisitos.length === 0 || datos.prerequisitos.every(pre => estadoRamos[pre])) {
    div.classList.remove("bloqueado");
  }

  if (estadoRamos[nombre]) {
    div.classList.add("aprobado");
    div.classList.remove("bloqueado");
  }

  div.onclick = () => {
    if (estadoRamos[nombre]) return;
    estadoRamos[nombre] = true;
    div.classList.add("aprobado");
    guardarEstado();

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
  Object.entries(ramos).forEach(([nombre, datos]) => {
    crearCaja(nombre, datos);
  });
};
