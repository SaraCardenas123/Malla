document.addEventListener('DOMContentLoaded', function () {
  const asignaturas = document.querySelectorAll('.asignatura');
  const reiniciarBtn = document.getElementById('reiniciarBtn');
  const progresoTexto = document.getElementById('progresoTexto');

  const totalCreditos = Array.from(asignaturas).reduce(
    (sum, a) => sum + Number(a.dataset.creditos),
    0
  );

  function actualizarProgreso() {
    const completadas = document.querySelectorAll('.asignatura.completada');
    const creditosCompletados = Array.from(completadas).reduce(
      (sum, a) => sum + Number(a.dataset.creditos),
      0
    );
    const porcentaje = ((creditosCompletados / totalCreditos) * 100).toFixed(1);
    progresoTexto.textContent = `Créditos completados: ${creditosCompletados} / ${totalCreditos} (${porcentaje}%)`;
  }

  function guardarEstado() {
    const estado = Array.from(asignaturas).map(a =>
      a.classList.contains('completada')
    );
    localStorage.setItem('estadoAsignaturas', JSON.stringify(estado));
  }

  function cargarEstado() {
    const estado = JSON.parse(localStorage.getItem('estadoAsignaturas'));
    if (estado && estado.length === asignaturas.length) {
      asignaturas.forEach((a, i) => {
        if (estado[i]) a.classList.add('completada');
      });
    }
  }

  asignaturas.forEach(asig => {
    asig.addEventListener('click', () => {
      asig.classList.toggle('completada');
      guardarEstado();
      actualizarProgreso();
    });
  });

  reiniciarBtn.addEventListener('click', () => {
    asignaturas.forEach(asig => asig.classList.remove('completada'));
    localStorage.removeItem('estadoAsignaturas');
    actualizarProgreso();
  });

  cargarEstado();
  actualizarProgreso();
});
