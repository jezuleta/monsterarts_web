module.exports = (sequelize, DataTypes) => {
    const DetallePedido = sequelize.define("DetallePedido", {
      id_detalle: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pedidos',
          key: 'id_pedido',
        },
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'productos',
          key: 'id_producto',
        },
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precio_unitario: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    }, {
      tableName: 'detalles_pedido',
      timestamps: false,
    });
  
    return DetallePedido;
  };
  