module.exports = (sequelize, DataTypes) => {
    const Carrito = sequelize.define("Carrito", {
      id_carrito: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario',
          unique: true,
        },
      }
    }, {
      tableName: 'carrito',
      timestamps: false,
    });
  
    return Carrito;
  };
  