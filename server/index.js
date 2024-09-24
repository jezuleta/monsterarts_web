const express = require("express");
const app = express();

app.use(express.json());

const db = require('./models');

// Routers
const UsuarioRouter = require('./routes/Usuario');
app.use("/usuario", UsuarioRouter);

const ProductoRouter = require('./routes/Producto');
app.use("/producto", ProductoRouter);

const PedidoRouter = require('./routes/Pedido');
app.use("/pedido", PedidoRouter);

const DetallePedidoRouter = require('./routes/DetallePedido');
app.use("/detallePedido", DetallePedidoRouter);

db.sequelize.sync()
    .then(() => {
        app.listen(3001, () => {
            console.log("Servidor corriendo en puerto 3001");
        });
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
    });
