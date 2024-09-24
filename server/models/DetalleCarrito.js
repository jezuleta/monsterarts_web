module.exports = (sequelize, DataTypes) => {
    const DetalleCarrito = sequelize.define("DetalleCarrito", {
      id_detalle_carrito: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_carrito: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'carritos',
          key: 'id_carrito',
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
      }
    }, {
      tableName: 'detalles_carrito',
      timestamps: false,
    });
  
    return DetalleCarrito;
  };
  