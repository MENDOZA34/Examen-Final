const Vehiculo = require('../models/vehiculo12');

async function index(req, res) {
  try {
    const vehiculos = await Vehiculo.findAll();
    res.render('index12', { vehiculos });
  } catch (error) {
    res.status(500).send('Error al obtener vehículos: ' + error.message);
  }
}

function createForm(req, res) {
  res.render('vehiculo12', {
    titulo: 'Nuevo Vehículo',
    accion: '/vehiculo12',
    metodo: 'POST',
    boton: 'Guardar',
    vehiculo: {}
  });
}

async function store(req, res) {
  try {
    const { marca, modelo, precio, cantidad } = req.body;
    await Vehiculo.store(marca, modelo, precio, cantidad);
    res.redirect('/vehiculo12');
  } catch (error) {
    res.status(500).send('Error al guardar vehículo: ' + error.message);
  }
}

async function show(req, res) {
  try {
    const { id } = req.params;
    const vehiculo = await Vehiculo.findById(id);
    if (!vehiculo) return res.status(404).send('Vehículo no encontrado');
    res.render('show12', { vehiculo });
  } catch (error) {
    res.status(500).send('Error al mostrar vehículo: ' + error.message);
  }
}

async function editForm(req, res) {
  try {
    const { id } = req.params;
    const vehiculo = await Vehiculo.findById(id);
    if (!vehiculo) return res.status(404).send('Vehículo no encontrado');

    res.render('vehiculo12', {
      titulo: 'Editar Vehículo',
      accion: `/vehiculo12/${id}?_method=PUT`,
      metodo: 'POST',
      boton: 'Modificar',
      vehiculo
    });
  } catch (error) {
    res.status(500).send('Error al cargar edición: ' + error.message);
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { marca, modelo, precio, cantidad } = req.body;
    await Vehiculo.update(id, marca, modelo, precio, cantidad);
    res.redirect('/vehiculo12');
  } catch (error) {
    res.status(500).send('Error al actualizar vehículo: ' + error.message);
  }
}

async function destroy(req, res) {
  try {
    const { id } = req.params;
    await Vehiculo.destroy(id);
    res.redirect('/vehiculo12');
  } catch (error) {
    res.status(500).send('Error al eliminar vehículo: ' + error.message);
  }
}

module.exports = {
  index,
  createForm,
  store,
  show,
  editForm,
  update,
  destroy
};
