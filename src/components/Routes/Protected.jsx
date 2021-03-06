import React from 'react' 
import { Route, Redirect } from 'react-router-dom'
                    // : sirve para poner alias
                    // ...rest almacena las demas propiedades siguientes cualesquieras
const Protected = ( { component: Component, ...rest } ) => {

  const userLogged = localStorage.getItem( 'token' )

  if ( !userLogged ) return <Redirect to='/login'/>

  return (
                     // render no sirve
    <Route { ...rest } component={ Component } /> 
  )
}

export default Protected
