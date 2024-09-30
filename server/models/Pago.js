module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define("Pago", {
      id_pago: {
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
      fecha_pago: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      monto: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      metodo_pago: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      tableName: 'pago',
      timestamps: false,
    });
  
    return Pago;
  };
  