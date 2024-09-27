const express = require("express");
const cors = require('cors');
const app = express();

var corOptions = {
    origin: "http://localhost:3002"
}

// middleware

app.use(cors(corOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routers

const usuarioRouter = require('./routes/UsuarioRoute.js')
const carritoRouter = require('./routes/CarritoRoute.js')
const detalleCarritoRouter = require('./routes/DetalleCarritoRoute.js')
const detallePedidoRouter = require('./routes/DetallePedidoRoute.js')
const envioRouter = require('./routes/EnvioRoute.js')

app.use('/api/usuario', usuarioRouter)
app.use('/api/carrito', carritoRouter) 
app.use('/api/detalleCarrito', detalleCarritoRouter)
app.use('/api/detallePedido', detallePedidoRouter)
app.use('/api/envio', envioRouter)

// testing

app.get('/', (req, res) =>{
    res.json({message: "hola que mas pues"})
})

// port

const PORT = process.env.PORT || 3002;

// server

 app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
 })



