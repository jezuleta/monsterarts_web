import React, { useState, useEffect } from 'react'
import style from './MostrarProductos.module.css'
import axios from 'axios'

const MostrarMisProductos = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const getProductosData = async () => {
      const {data} = await axios.get('/api/producto/allProductos')
    }
  }, [])

  return (
    <div>
        <h1>Mis Productos</h1>
    </div>
  )
}

export default MostrarMisProductos

