import React from 'react'
import { Link } from 'react-router-dom'

const HeaderPostal = ({titulo, dregresar, dsiguiente}) => {
  return (
   <div className="row p-0 header-postal">
   <div className="col-lg-2 p-0">
      <Link to={`/${dregresar}`}>
      <button className='button-regresar'>Regresar</button>
      </Link>
   </div>
   <div className="col-lg-8 p-0">
   <h2 className='titulo postal-title text-center pt-5 pb-3'>{titulo}</h2>
   </div>
   <div className="col-lg-2 p-0">
   <Link to={`/${dsiguiente}`}>
   <button className='button-siguiente'>Siguiente</button>
   </Link>
   </div>
</div>
)
}

export default HeaderPostal