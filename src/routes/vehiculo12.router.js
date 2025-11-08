const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehiculo12.controller');

router.get('/vehiculo12', controller.index);

router.get('/vehiculo12/nuevo', controller.createForm);

router.post('/vehiculo12', controller.store);

router.get('/vehiculo12/:id', controller.show);

router.get('/vehiculo12/:id/editar', controller.editForm);

router.put('/vehiculo12/:id', controller.update);

router.delete('/vehiculo12/:id', controller.destroy);


router.get('/', (req, res) => {
  res.redirect('/vehiculo12');
});

module.exports = router;
