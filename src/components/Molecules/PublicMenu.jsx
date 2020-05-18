import React from 'react'
import { NavLink } from 'react-router-dom'

const removeToken = () => {
  localStorage.setItem( 'token', '' )
  window.location = '/login'
}

const PublicMenu = () => {
  return (
    <ul>
      <li><NavLink exact to='/login'>Login</NavLink></li>
      <li><NavLink to='/registro'>Crear cuenta</NavLink></li>
    </ul>
  )
}

export default PublicMenu
