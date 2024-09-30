module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define("Pedido", {
  
      id_pedido: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
  
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
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
      tableName: 'pedido',
      timestamps: false,
    });
  
    return Pedido;
  };
  