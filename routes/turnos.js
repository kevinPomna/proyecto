const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/turnosController');

// Listar los turnos pendientes
router.get('/', turnosController.listarTurnos);

// Crear un nuevo turno
router.post('/', turnosController.crearTurno);

// Cambiar la fecha de un turno
router.put('/:turnoId', turnosController.cambiarFechaTurno);

// Eliminar un turno
router.delete('/:turnoId', turnosController.eliminarTurno);

module.exports = router;
