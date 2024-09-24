const express = require("express");
const app = express();

const db = require('./models');

// Routers
const UsuarioRouter = require('./routes/Usuario')
app.use("/usuario", UsuarioRouter);

const ProductoRouter = require('./routes/Producto')
app.use("/producto", ProductoRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Servidor corriendo en puerto 3001");
    });
});
