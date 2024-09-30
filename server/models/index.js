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
  console.log("conectado... ");
})
.catch(err => {
  console.log("no conectado... " + err);
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

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

/* +------------------------------------------------------------------+ */

//relaciones 

//Un Artista (Usuario) puede crear varios Productos.

db.usuario.hasMany(db.producto, {
  foreignKey: 'id_usuario',
  as: 'producto'
})

db.producto.belongsTo(db.usuario, {
  foreignKey: 'id_usuario',
  as: 'usuario'
})

// Un Cliente (Usuario) puede hacer varios Pedidos

db.usuario.hasMany(db.pedido, {
  foreignKey: 'id_usuario',
  as: 'pedido'
})

db.pedido.belongsTo(db.usuario, {
  foreignKey: 'id_usuario',
  as: 'usuario'
})

// Un Pedido tiene varios DetallePedido (cada uno representa un producto en el pedido).

db.pedido.hasMany(db.detallePedido, {
  foreignKey: 'id_pedido',
  as: 'detallePedido'
})

db.detallePedido.belongsTo(db.pedido, {
  foreignKey: 'id_pedido',
  as: 'pedido'
})

// Un Carrito tiene varios DetalleCarrito (cada uno representa un producto en el carrito).

db.carrito.hasMany(db.detalleCarrito, {
  foreignKey: 'id_carrito',
  as: 'detalleCarrito'
})

db.detalleCarrito.belongsTo(db.carrito, {
  foreignKey: 'id_carrito',
  as: 'carrito'
})

// Un DetalleCarrito puede tener varios productos

db.detalleCarrito.hasMany(db.producto, {
  foreignKey: 'id_producto',
  as: 'producto'
})

db.producto.belongsTo(db.detalleCarrito, {
  foreignKey: 'id_producto',
  as: 'detalleCarrito'
})

//Un Pedido tiene Pago

db.pedido.hasOne(db.pago, {
  foreignKey: 'id_pedido',
  as: 'pago'
})

db.pago.belongsTo(db.pedido, {
  foreignKey: 'id_pedido',
  as: 'pedido'
})

// Un Pedido puede tener un Envío

db.pedido.hasOne(db.envio, {
  foreignKey: 'id_pedido',
  as: 'envio'
})

db.envio.belongsTo(db.pedido, {
  foreignKey: 'id_pedido',
  as: 'pedido'
})

/* +------------------------------------------------------------------+ */

module.exports = db;