module.exports = (sequelize, DataTypes) => {
    const Carrito = sequelize.define("Carrito", {
      id_carrito: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id_usuario',
        },
      }
    }, {
      tableName: 'carritos',
      timestamps: false,
    });
  
    return Carrito;
  };
  