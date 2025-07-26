<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Malla Curricular - Ingeniería Industrial</title>
  <link rel="stylesheet" href="styles.css" />
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    #malla-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .semestre {
      flex: 1;
      min-width: 200px;
    }

    .contenedor-semestre {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
    }

    .ramo {
      padding: 10px;
      border-radius: 8px;
      background-color: #f0f0f0;
      cursor: pointer;
      border: 2px solid transparent;
    }

    .ramo.bloqueado {
      background-color: #ddd;
      opacity: 0.6;
      cursor: not-allowed;
    }

    .ramo.aprobado {
      background-color: #a3e4a1;
      border-color: #3c763d;
    }

    #footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #ccc;
    }

    #estado {
      margin: 20px 0;
      font-weight: bold;
    }

    button {
      padding: 10px 15px;
      margin-right: 10px;
      font-size: 16px;
      cursor: pointer;
    }

    .btn-red {
      background-color: #e74c3c;
      color: white;
      border: none;
      border-radius: 5px;
    }

    .btn-red:hover {
      background-color: #c0392b;
    }
  </style>
</head>
<body>
  <h1>Malla Curricular - Ingeniería Industrial</h1>

  <div id="malla-container">
    <!-- Aquí se generan los semestres automáticamente -->
    <script>
      for (let i = 1; i <= 10; i++) {
        document.write(`
          <div class="semestre" id="semestre${i}">
            <h3>Semestre ${i}</h3>
            <div class="contenedor-semestre"></div>
          </div>
        `);
      }
    </script>
  </div>

  <div id="footer">
    <button id="botonReiniciar" class="btn-red">Reiniciar progreso</button>
    <div id="estado">
      Créditos completados: <span id="creditosCompletados">0</span> /
      <span id="porcentajeAvance">0.00</span>% de avance
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
