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
          model: 'carrito',
          key: 'id_carrito',
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
      }
    }, {
      tableName: 'detalleCarrito',
      timestamps: false,
    });
  
    return DetalleCarrito;
  };
  