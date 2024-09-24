module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define("Pedido", {
  
      id_pedido: {
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
      },
  
      fecha_pedido: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
  
      estado: {
        type: DataTypes.ENUM("pendiente", "enviado", "entregado", "cancelado"),
        allowNull: false,
      },
  
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    },
    
    {
      tableName: 'pedidos',
      timestamps: false,
    });
  
    return Pedido;
  };
  