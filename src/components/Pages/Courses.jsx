import React, { useEffect } from 'react'
import Banner from '../Organinsms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllCourses } from '../../redux/actionCreators'
import Card from '../Organinsms/Card'

const Courses = ( { courses } ) => {

  useEffect( () => {
    store.dispatch( getAllCourses() )
  } , [] )

  return (
    <>
      <Banner 
        color = 'second-color'
        image = { { 
          src : '#',
          alt : "Banner Cursos"
        } }
        title = "Nuestros cursos"
        subtitle = "Comienza desde cero hoy mismo en tu camino a dominar la tecnología"
      />
      
      {
        courses && 
        <main className="ed-grid m-grid-5">
          {
            courses.map( item => (
              <Card 
                key = { item.id }
                cardId = { item.id }
                path = { 'cursos' }
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
  // teachers : state.teacherReducer esto cuando en reducer retornes un [] direcntamente pilas
  courses : state.courseReducer.courses
} )

export default connect( mapStateToProps, {} )( Courses )
