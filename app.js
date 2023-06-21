const express = require('express');
const app = express();

app.use(express.json());

// Rutas
const turnosRoutes = require('./routes/turnos');
app.use('/turnos', turnosRoutes);

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
