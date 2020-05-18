import React from 'react'

const Teacher = ( { picture, name, country } ) => {
  return (
    <article >
      {/* s-px-4 desde pantallas pequeñas le digo que tenga un padding de 4 */}
      <div className='s-px-4'>
        {/* img-container para que la imgen se adecue al contenedor padre */}
        <div className="img-container circle s-mb-2">
          <img src={ picture } alt={ name } />
        </div>
      </div>
      <div className='s-center'>
        {/* t3 un parrafo qu emula el estilo de un h3 */}
        {/* s-mb-1 margen desde pantallas pequeñas el margin botton sea de 1  */}
        <p className="t3 s-mb-1">{ name }</p>
        <p>{ country }</p>
      </div>
    </article>
  )
}

export default Teacher
