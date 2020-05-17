import React, { createRef } from 'react'
import { NavLink } from 'react-router-dom'

// createRef Referencias en React son la forma de como podemos seleccionar cierto elemento dentro del dom virtual,
// Es como hacer un document.getElementById pero dentro de React

// Nuestro elemento del dom virtual la vamos a guardar en la constante menu
// Para poder guardar nuestro elemento debemos pasarlo ver ->1001
const menu = createRef( )

// Va a acceder a menu y le va a pedir su estado actual
// current es el elemento actual
// classList la lista de clases del elemento
// En otras palabras cuando el usuarrio valla a clikear el menu amburguesa va a preguntar si tiene show, si tiene le quita y si no le pone
const toggleMenu = () => menu.current.classList.toggle('show')

const removeToken = () => {
  localStorage.setItem( 'token', '' )
  window.location = '/login'
}

const Header = () => (
  <header className='main-header'>
                        {/* s-grid-5 en pantallas pequeñas tendra 5 columnas
                            lg-grid-4 en pantallas grandes tedra 4 columnas */}
    <div className="ed-grid s-grid-5 lg-grid-4">
                        {/* s-cols-4 de las 5 columnas que tengo disponible ocupe 4 columnas  
                            lg-cols-1 en cambio para pantallas grandes ocupe 1 columna
                            s-cross-center centrar verticalmente */}
      <div className='s-cols-4 lg-cols-1 s-cross-center'>
        <NavLink to='/' >
          <img 
            src='https://ed.team/static/images/logo.svg' 
            alt='EDLogo' 
            className='main-logo' 
            />
        </NavLink>
      </div>
                        {/* s-cols-1 de las 5 columnas que tengo disponible ocupe 1 columnas  
                            lg-cols-3 en cambio para pantallas grandes ocupe 3 columna 
                            s-main-end para que se valla al final*/}
      <div className='s-cols-1 lg-cols-3 s-cross-center s-main-end'>
                                    {/* ->1001 */}
        <nav className="main-menu" ref={ menu }>
          <ul>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/especialidades'>Especialidades</NavLink></li>
            <li><NavLink to='/cursos'>Cursos</NavLink></li>
            <li><NavLink to='/profesores'>Profesores</NavLink></li>
            <li><span onClick={ () => removeToken() }>Cerrar Session</span></li>
          </ul>
        </nav>
        {/* main-menu-toggle nos va a dibujar la amburguesa de 3 puntos
            to-l con esto le dicimos que la ambrguesa solo aparezaca en ventanas grandes*/}
        <div 
          className='main-menu-toggle to-l'
          onClick={ () => toggleMenu() }
          >
          
        </div>                            
      </div>
    </div>
  </header>
)

export default Header
