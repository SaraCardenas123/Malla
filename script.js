// script.js

// IMPORTANTE: Asegúrate de incluir LeaderLine en tu HTML
// <script src="https://cdn.jsdelivr.net/npm/leader-line@1.0.7/leader-line.min.js"></script>

const ramos = {
  // ... (contenido idéntico al anterior, no repetido aquí por brevedad)
};

const estadoRamos = {};
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
      elem.classList.remove("bloqueado");
    } else {
      elem.classList.remove("aprobado");
      elem.classList.add("bloqueado");
      estadoRamos[id] = false;
    }
  });
}

function dibujarLineas() {
  // Limpiar líneas anteriores
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

  // Esperar render para dibujar líneas
  setTimeout(() => dibujarLineas(), 500);
};
