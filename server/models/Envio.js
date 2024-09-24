module.exports = (sequelize, DataTypes) => {
    const Envio = sequelize.define("Envio", {
      id_envio: {
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
      direccion_envio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_envio: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      estado_envio: {
        type: DataTypes.ENUM("pendiente", "en tránsito", "entregado"),
        allowNull: false,
      }
    }, {
      tableName: 'envios',
      timestamps: false,
    });
  
    return Envio;
  };
  