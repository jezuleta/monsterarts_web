const dbConfig = require('../config/dbConfig.js');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect, 

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
  }
  }
);

sequelize.authenticate()
.then(() => {
  console.log("conectado...");
})
.catch(err => {
  console.log("no conectado " + err);
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Asegúrate de usar 'DataTypes' aquí también
db.carrito = require('./Carrito.js')(sequelize, DataTypes);
db.detalleCarrito = require('./DetalleCarrito.js')(sequelize, DataTypes);
db.detallePedido = require('./DetallePedido.js')(sequelize, DataTypes);
db.envio = require('./Envio.js')(sequelize, DataTypes);
db.pago = require('./Pago.js')(sequelize, DataTypes);
db.pedido = require('./Pedido.js')(sequelize, DataTypes);
db.producto = require('./Producto.js')(sequelize, DataTypes);
db.usuario = require('./Usuario.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
.then(() => {
  console.log("sí, re-sync realizado!!");
});

module.exports = db;
