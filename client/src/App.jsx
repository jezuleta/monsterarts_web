import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"

/* +----------------------------------------------------+ */

import axios from "axios";
import { useEffect } from 'react';

/* +----------------------------------------------------+ */

import Navbar from '../src/components/Navbar.jsx'
import Home from '../src/Screens/Home.jsx'
import Tienda from '../src/Screens/Tienda'
import Ingresar from '../src/Screens/Ingresar'
import Carrito from '../src/Screens/Carrito'
import Nosotros from '../src/Screens/Nosotros'
import Contactos from '../src/Screens/Contactos' 
import Cliente from '../src/Screens/Cliente'
import Footer from './components/Footer'

import AddProducto from '../src/Screens/Productos/AddProducto'
import MostrarMisProductos from '../src/Screens/Productos/MostrarMisProductos'
import EditarProducto from '../src/Screens/Productos/EditarProducto'
import DetalleProducto from '../src/Screens/Productos/DetalleProducto'

/* +----------------------------------------------------+ */

function App() {
  const [count, setCount] = useState(0)

  /* +----------------------------------------------------+ */
  
  useEffect(() => {
    axios.get("http://localhost:3001/Usuario").then((response) => {
      console.log("testo")
    })
  }, [])

  /* +----------------------------------------------------+ */

  return (
    <>

      <div>
          <Navbar />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/ingresar" element={<Ingresar />} />
            <Route exact path="/tienda" element={<Tienda />} />
            <Route exact path="/carrito" element={<Carrito />} />
            <Route exact path="/nosotros" element={<Nosotros />} />
            <Route exact path="/contactos" element={<Contactos />} />
            <Route exact path="/cliente" element={<Cliente />} />

            <Route exact path="/addProducto" element={<AddProducto />} />
            <Route exact path="/mostrarMisProductos" element={<MostrarMisProductos />} />
            <Route exact path="/producto/editar/:id" element={<EditarProducto/>} />
            <Route exact path="/producto/:id" element={<DetalleProducto/>} />
          </Routes>
          <Footer />
      </div>

    </>
  )
}

export default App
