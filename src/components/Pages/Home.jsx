import React, { useEffect } from 'react'
import Banner from '../Organinsms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllPosts } from '../../redux/actionCreators'
import Publication from '../Organinsms/Publication'

const Home = ( { posts } ) => {

  useEffect( () => {
    store.dispatch( getAllPosts() )
  } , [] )


  return (
    <>
      <Banner 
        color = 'dark-color'
        image = { { 
          src : '#',
          alt : "Banner Home"
        } }
        title = "Bienvenido a la experiencia más increible en educación online. Comienza hoy mismo a aprender"
        subtitle = "Nuestro equipo a desarrolado esta plataforma pensando en ti, Sabemos que estas busacndo contenido de calidad, Aquí lo encontrarás"
        home 
        poster = "https://edteam-media.s3.amazonaws.com/specialities/original/10322ac1-7b43-4e12-9000-0c28e04178d6.png"
      />
    
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas Publicaciones</h2>
          {
            posts ?
              <div>
                {
                  posts.map( item => (
                    <Publication
                      key = { item.id }
                      title = { item.title }
                      author = { item.author }
                      fecha = { item.fecha }
                      content = { item.content }
                    />
                  ) )
                }
              </div>
            :
              <p>No existen publicaciones en BD</p>
          }

        </div>
        <div>
          <h3>Lista de categorías</h3>
          <ul className="feature-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angualr</span></li>
            <li><span>Vue.</span></li>
            <li><span>HTML5</span></li>
            <li><span>CSS</span></li>
            <li><span>Sass</span></li>
            <li><span>Laravel</span></li>
            <li><span>Django</span></li>
          </ul>
        </div>
      </main>
      
    </>
  )
}

const mapStateToProps = state => ( {
  posts : state.postReducer.posts
} )

export default connect( mapStateToProps, {} )( Home )
