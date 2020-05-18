import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getSpeciality } from '../../redux/actionCreators'
import Banner from '../Organinsms/Banner'

const Speciality = ( { speciality } ) => {

  useEffect( () => { store.dispatch( getSpeciality(1) ) } , [] )

  return (
    <>
      {
        speciality && 
        <>
          <Banner 
            color = 'dark-color'
            image = { { 
              src : speciality.data.picture ,
              alt : speciality.data.name
            } }
            title = { speciality.data.name }
            info = { speciality.data.information }
            subtitle = { speciality.data.subtitle }
            courseBanner
            poster = { speciality.data.picture }
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-fectures ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div>
                  <h3 className="t4">¿Que aprenderas?</h3>
                  <ul>
                    {
                      speciality.data.abilities.map( ability => (
                      <li key={ ability.id }>{ ability.description }</li>
                      ) )
                    }
                  </ul>
                </div> 
                <div>
                  <h3 className="t4">Conocimientos previos</h3>
                  <ul>
                    {
                      speciality.data.knowledge.map( knowledge => (
                      <li key={ knowledge.id }>{ knowledge.description }</li>
                      ) )
                    }
                  </ul>
                </div> 
                <div>
                  <h3 className="t4">Nivel</h3>
                  <p>{ speciality.data.level }</p>
                </div>
              </div>
              <h2>Temario de la especialidad</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  speciality.data.courses.map( curso => (
                    <div key={ curso.id } className="course-class l-section" >
                      <div className="ed-grid m-grid-3">
                        <img src={ curso.picture } alt={ curso.name }/>
                        <div className="m-cols-2">
                          <h3>{ curso.name }</h3>
                          <p>{ curso.information }</p>
                        </div>
                      </div>
                    </div>
                  ) )
                }
              </div>
            </div>
          </main>
        </>
      }
    </>
  )
}

const mapStateToProps = state => ( {
  speciality : state.specialityReducer.speciality
} )

export default connect ( mapStateToProps, {} )( Speciality )
