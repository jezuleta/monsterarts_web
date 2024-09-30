module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define("Producto", {
  
      id_producto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
  
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: true,
        },
      },
  
      categoria: {
        type: DataTypes.ENUM("pinturas", "tatuajes", "figuras de resina", "camisetas", "stickers"),
        allowNull: false,
      },
  
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
  
      imagen_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario',
        },
      }
    },
    
    {
      tableName: 'producto',
      timestamps: false,
    });
  
    return Producto;
  };
  