const express = require('express');
const router = express.Router();
const OrdemController = require('../controllers/OrdemController');


router.get('/ordem', OrdemController.getAllOrdens);
router.get('/ordem/:id', OrdemController.getOrdemById);
router.post('/ordem', OrdemController.addOrdem);
router.put('/ordem/:id', OrdemController.updateOrdem);
router.delete('/ordem/:id', OrdemController.deleteOrdem);

module.exports = router;
