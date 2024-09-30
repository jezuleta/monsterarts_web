module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {

    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    identificacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    rol: {
      type: DataTypes.ENUM("artista", "cliente", "administrador"),
      allowNull: false,
    },

    estado: {
      type: DataTypes.ENUM("activo", "inactivo"),
      allowNull: false,
    },

    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },

    ultima_sesion: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    forzar_cambio_contrasena: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  
  {
    tableName: 'usuario',  
    timestamps: false,
  });

  return Usuario;
};
