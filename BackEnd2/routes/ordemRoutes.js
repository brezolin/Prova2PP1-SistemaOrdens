const express = require('express');
const router = express.Router();
const OrdemController = require('../controllers/OrdemController');

// Rotas para operações CRUD de ordens de serviço
router.get('/', OrdemController.getAllOrdens);
router.get('/:id', OrdemController.getOrdemById);
router.post('/', OrdemController.addOrdem);
router.put('/:id', OrdemController.updateOrdem);
router.delete('/:id', OrdemController.deleteOrdem);

module.exports = router;
