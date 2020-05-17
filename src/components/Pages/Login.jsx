import React from 'react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const c = console.log
const authentication = e => {
  
  e.preventDefault()
  const form = e.target 

  const data = {
    "email" : form.email.value,
    "password" : form.password.value
  }

  Axios.post( `https://api-edteam.alejogs4.now.sh/login`, data)
    .then( resp => {
      localStorage.setItem( 'token', resp.data.token )
      window.location = "/"
      // const salir = () => <Redirect to='/'/>
      // salir()
     } ) 
    .catch( error => c( error ) )
}

const Login = () => {
  return (
    <div className='ed-grid'>
      <div className="l-block"></div>
      {/* m-to-center en pantallas medianas lo vamos a centrar
          m-60 en pantallas medianas que ocupe un 60 % de nuestro espacio  
          lg-30 y en pantallas grandes que ocupe un 30 % de nuestro espacio */}
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar sesiòn</h1>
        <form onSubmit={ authentication.bind( this ) } >
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
            {/* button full para que ocupe todo */}
            <input type="submit" className="button full" value="Iniciar sesiòn"/>
            <div className="l-block"></div>
            <Link to="/registro">
              <input type="submit" className="button accent-color full" value="Crea tu cuenta"/>
            </Link>
          </div>
        </form>
        <div className="center">
          <p>¿No tienes cuenta de usuario? <Link to="/registro">Crear Cuenta</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default Login
