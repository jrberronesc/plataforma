import React, { useEffect } from 'react'
import Banner from '../Organinsms/Banner'
import store from '../../redux/store'
import { getAllTeachers } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Teacher from '../Organinsms/Teacher'

const Teachers = ( { match, teachers } ) => {

  useEffect( () => {
    store.dispatch( getAllTeachers() )
  }, [ match ] ) // Truco - ya que el match nunca va a cambiar lo podemos pasar, el math biene la url y ya sabes
  

  return (
    <>
      <Banner 
        color = 'first-color'
        image = { { 
          src : '#',
          alt : "Banner Profesores"
        } }
        title = "Nuestros profesores"
        subtitle = "Este plantel docente está altamente calificado para guiarte en tu educación"
      />
      {
        // si teachers existe dibuja lo siguiente
        teachers &&                           /* row-gap que entre cada fila exista un espacio */
          <main className='ed-grid m-grid-3 lg-grid-4 row-gap'>
          {
            teachers.map( item => (
              <Teacher 
                key = { item.id } /* como estamos haciendo un map de teachers ahora si le ponemos el key */
                picture = { item.picture }
                name = { item.name }
                country = { item.country }
              />
            )  )
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => ( {
  // teachers : state.teacherReducer esto cuando en reducer retornes un [] direcntamente pilas
  teachers : state.teacherReducer.teachers
} )

export default connect( mapStateToProps, {} )( Teachers )
