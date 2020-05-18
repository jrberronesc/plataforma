import React from 'react'
import { Link } from 'react-router-dom'

const Card = ( { cardId, path, picture, name } ) => {
  return (
    <article className="card s-border">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={ `/${ path }/${ cardId }` }>
          <img src={ picture } alt={ name } />
        </Link>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          { name }
        </h3>
      </div>
    </article>
  )
}

export default Card
