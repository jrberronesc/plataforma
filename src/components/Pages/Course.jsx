import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getCourse } from '../../redux/actionCreators'
import Banner from '../Organinsms/Banner'

const Course = ( { course } ) => {

  useEffect( () => {
    store.dispatch( getCourse(1) )
  } , [] )

  return (
    <>
      {
        course &&
          <>
            <Banner 
              color = 'third-color'
              image = { { 
                src : course.picture ,
                alt : course.name
              } }
              title = { course.name }
              info = { course.information }
              subtitle = { course.subtitle }
              especialidad = { course.data.specialities[0].name }
              courseBanner
              poster = { course.picture }
            />
            <main className="ed-grid lg-grid-10">
              <div className="lg-cols-7">
                <div className="course-fectures ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                  <div>
                    <h3 className="t4">¿Que aprenderas?</h3>
                    {/* dangerouslySetInnerHTML una propiedad que no conocia */}
                    <ul dangerouslySetInnerHTML={ { __html: course.you_learn } } />
                  </div> 
                  <div>
                    <h3 className="t4">Conocimientos previos</h3>
                    <ul dangerouslySetInnerHTML={ { __html: course.requirements } } />
                  </div> 
                  <div>
                    <h3 className="t4">Nivel</h3>
                    <p>{ course.level }</p>
                  </div>
                </div>
                <h2>Temario de curso</h2>
                <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                  {
                    course.data.classes.map( clase => (
                      <div key={ clase.class.id } className="course-class l-section" >
                        <h3>{ clase.class.title }</h3>
                        <p>{ clase.class.description }</p>
                        <ul >
                          {
                            clase.subjects.map( subject => (
                              <li>{ subject.subject.title }</li>
                            ) )
                          }
                        </ul>
                      </div>
                    ) )
                  }
                </div>
              </div>
              <div className="lg-cols-3">
                <h2 className="t3">Profesor</h2>
                <p>Jefferson Berrones</p>
              </div>
            </main>
          </>
      }
    </>
  )
}


const mapStateToProps = state => ( {
  course : state.courseReducer.course
} )


export default connect( mapStateToProps, {} )( Course )
