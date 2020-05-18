import React, { useEffect } from 'react'
import Banner from '../Organinsms/Banner'
import store from '../../redux/store'
import { getAllSpecialities } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Card from '../Organinsms/Card'

const Specialities = ( { specialities } ) => {

  useEffect( () => {
    store.dispatch( getAllSpecialities() )
  } , [] )
  
  return (
    <>
      <Banner 
        color = 'accent-color-alt'
        image = { { 
          src : '#',
          alt : "Banner Especialidades"
        } }
        title = "Especialidades"
        subtitle = "Domina una tecnología con las rutas de aprendizaje que te ofrecemos"
      />
      {
        specialities && 
        <main className="ed-grid m-grid-3">
          {
            specialities.map( item => (
              <Card 
                key = { item.id }
                cardId = { item.id }
                path = { 'especialidades' }
                picture = { item.picture }
                name = { item.name }
              />
            ) )
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => ( {
  specialities : state.specialityReducer.specialities
} )

export default connect( mapStateToProps, {} )( Specialities )
