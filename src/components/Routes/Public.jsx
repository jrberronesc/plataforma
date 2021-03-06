import React from 'react'
import { Route, Redirect } from 'react-router-dom'
                    // : sirve para poner alias
                    // ...rest almacena las demas propiedades siguientes cualesquieras
const Public = ( { component: Component, ...rest } ) => {

  const userLogged = localStorage.getItem( 'token' )

  if ( userLogged ) {
    return <Redirect to='/'/>
  }

  return (
                     // render no sirve
    <Route { ...rest } component={ Component } /> 
  )
}

export default Public
