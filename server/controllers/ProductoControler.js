const db = require('../models')

// create main model
const Producto = db.producto

const datosNecesarios = { attributes: [
    'id_producto',
    'nombre',
    'descripcion',
    'precio',
    'categoria',
    'stock',
    'imagen_url',
    'id_usuario'
]}

// main work

// 1. create Producto
const addProducto = async (req, res) => {
    try {
        let info = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categoria: req.body.categoria,
            stock: req.body.stock,
            imagen_url: req.body.imagen_url,
            id_usuario: req.body.id_usuario
        }

        const producto = await Producto.create(info)
        res.status(200).send(producto)
        console.log(producto)
    } catch (error) {
        console.error("Error creando producto:", error)
        res.status(500).send({ error: "Error creando producto" })
    }
}

// 2. get all productos
const getAllProductos = async (req, res) => {
    try {
        let productos = await Producto.findAll({...datosNecesarios})
        res.status(200).send(productos)
    } catch (error) {
        console.error("Error obteniendo productos:", error)
        res.status(500).send({ error: "Error obteniendo productos" })
    }
}

// 3. get single producto
const getOneProducto = async (req, res) => {
    try {
        let id_producto = req.params.id_producto
        let producto = await Producto.findOne({ where: { id_producto: id_producto }, ...datosNecesarios})
        if (producto) {
            res.status(200).send(producto)
        } else {
            res.status(404).send({ error: "Producto seleccionado no encontrado" })
        }
    } catch (error) {
        console.error("Error obteniendo producto:", error)
        res.status(500).send({ error: "Error obteniendo producto" })
    }
}

// 4. update producto
const updateProducto = async (req, res) => {
    try {
        let id_producto = req.params.id_producto
        const producto = await Producto.update(req.body, { where: { id_producto: id_producto }})
        if (producto[0] === 1) {
            res.status(200).send({ message: "Producto actualizado correctamente" })
        } else {
            res.status(404).send({ error: "Producto para actualizar no encontrado" })
        }
    } catch (error) {
        console.error("Error actualizando producto:", error)
        res.status(500).send({ error: "Error actualizando producto" })
    }
}

// 5. delete producto
const deleteProducto = async (req, res) => {
    try {
        let id_producto = req.params.id_producto
        const rowsDeleted = await Producto.destroy({ where: { id_producto: id_producto }})
        if (rowsDeleted === 1) {
            res.status(200).send({ message: "Producto eliminado correctamente" })
        } else {
            res.status(404).send({ error: "Producto a eliminar no encontrado" })
        }
    } catch (error) {
        console.error("Error eliminando producto:", error)
        res.status(500).send({ error: "Error eliminando producto" })
    }
}

module.exports = {
    addProducto,
    getAllProductos,
    getOneProducto,
    updateProducto,
    deleteProducto,
}
