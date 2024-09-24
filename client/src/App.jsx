import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './components/Screens/Home'
import Tienda from './components/Screens/Tienda'
import Ingresar from './components/Screens/Ingresar'
import Carrito from './components/Screens/Carrito'
import Nosotros from './components/Screens/Nosotros'
import Contactos from './components/Screens/Contactos' 
import Cliente from './components/Screens/Cliente' 
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Tienda" element={<Tienda />} />
            <Route path="/Ingresar" element={<Ingresar />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Contactos" element={<Contactos />} />
            <Route path="/Cliente" element={<Cliente />} />
          </Routes>
          <Footer />
      </div>

    </>
  )
}

export default App
