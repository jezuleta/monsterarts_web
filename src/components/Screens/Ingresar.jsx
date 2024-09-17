//import React from 'react';
import style from './Ingresar.module.css';
import { useForm } from "react-hook-form";

const Ingresar = () => {

  const { register, handleSubmit} = useForm();

  return (
    <div className={style.principal}>
      
      <div className={style.box}>
        <h1 className={style.title} >Ingresar</h1>
        <form action="">
          <div>
            <label>Correo</label>
            <imput type="text" name="" />
          </div>
          <div>
            <label>Constraseña</label>
            <imput type="password" />
          </div>
        </form>
      </div>

    </div>
  )
}

export default Ingresar