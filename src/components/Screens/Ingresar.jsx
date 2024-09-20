//import React from 'react';
import style from './Ingresar.module.css';
import { useForm } from "react-hook-form";

const Ingresar = () => {

  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className={style.principal}>
      
      <div className={style.box}>
        <h1 className={style.title} >Ingresar</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Correo</label>
            <input type="mail" {...register('mail')} required/>
          </div>
          <div>
            <label>Constraseña</label>
            <input type="password" required/>
          </div>
          <input type='submit' value='Enviar' />
        </form>
      </div>

    </div>
  )
}

export default Ingresar