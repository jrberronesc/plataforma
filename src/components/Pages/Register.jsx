import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const registration = e => {
  e.preventDefault()
  const form = e.target 

  const data = {
    "email" : form.email.value,
    "name" : form.fullname.value,
    "password" : form.password.value
  }
  // process.env.REACT_APP_API_USER No funciona, no se porque
  Axios.post( `https://api-edteam.alejogs4.now.sh/signup`, data)
    .then( resp => {
      alert( "Usuario Creado" )
      window.location = "/login"
    } ) 
    .catch( error => alert( "Error al crear el usuario" ) )

}

const Register = () => {
  return (
    <div className='ed-grid'>
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Crear cuenta</h1>
        <form onSubmit={ registration.bind( this ) } >
          <div className="form__item">
            <label htmlFor="fullname">
              Nombre Completo
              <input type="text" name='fullname' id="fullname" placeholder='Jefferson Berrones' required/>
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input type="email" name='email' id="email" placeholder='example@gmail.com' required/>
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Password
              <input type="password" name='password' id="password" placeholder='**********' required/>
            </label>
          </div>
          <div className="form_item">
            <input type="submit" className="button full" value="Registrarse"/>
            <div className="l-block"></div>
            <Link to="/login">
              <input type="submit" className="button accent-color full" value="Ir a login"/>
            </Link>
          </div>
        </form>
        <div className="center">
          <p>¿Ya tienes cuenta de usuario? <Link to="/login">Iniciar Session</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default Register
