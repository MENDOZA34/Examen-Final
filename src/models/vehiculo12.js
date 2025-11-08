const pool = require('./mysql');

// Obtener todos los vehículos
async function findAll() {
  const [rows] = await pool.query('SELECT * FROM vehiculo12');
  return rows;
}

// Obtener un vehículo por ID
async function findById(id) {
  const [rows] = await pool.query(
    'SELECT * FROM vehiculo12 WHERE ID_VEHICULO_12 = ?',
    [id]
  );
  return rows[0];
}

// Crear un vehículo
async function store(marca, modelo, precio, cantidad) {
  const [result] = await pool.query(
    `INSERT INTO vehiculo12 
      (MARCA_12, MODELO_12, PRECIO_12, CANTIDAD_12)
     VALUES (?, ?, ?, ?)`,
    [marca, modelo, precio, cantidad]
  );
  return result.insertId;
}

// Actualizar un vehículo
async function update(id, marca, modelo, precio, cantidad) {
  await pool.query(
    `UPDATE vehiculo12
     SET MARCA_12 = ?, MODELO_12 = ?, PRECIO_12 = ?, CANTIDAD_12 = ?
     WHERE ID_VEHICULO_12 = ?`,
    [marca, modelo, precio, cantidad, id]
  );
}

// Eliminar un vehículo
async function destroy(id) {
  await pool.query(
    'DELETE FROM vehiculo12 WHERE ID_VEHICULO_12 = ?',
    [id]
  );
}

module.exports = {
  findAll,
  findById,
  store,
  update,
  destroy
};
