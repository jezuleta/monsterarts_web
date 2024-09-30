module.exports = (sequelize, DataTypes) => {
    const DetallePedido = sequelize.define("DetallePedido", {
      id_detalle_pedido: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pedido',
          key: 'id_pedido',
        },
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'producto',
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
      tableName: 'detallePedido',
      timestamps: false,
    });
  
    return DetallePedido;
  };
  