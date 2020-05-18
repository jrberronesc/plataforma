import React from 'react'
import { NavLink } from 'react-router-dom'

const removeToken = () => {
  localStorage.setItem( 'token', '' )
  window.location = '/login'
}

const PrivateMenu = () => {
  return (
    <ul>
      <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink to='/especialidades'>Especialidades</NavLink></li>
      <li><NavLink to='/cursos'>Cursos</NavLink></li>
      <li><NavLink to='/profesores'>Profesores</NavLink></li>
      <li><a href='#' onClick={ () => removeToken() }>Cerrar Session</a></li>
    </ul>
  )
}

export default PrivateMenu
