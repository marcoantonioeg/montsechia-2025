import React from 'react'
import Flores from '../components/home/Flores'
import HeaderPostal from '../components/home/HeaderPostal';

const PostalFlores = () => {
  return (
    <div className='container'>
   <HeaderPostal 
        titulo="Escoge tus flores para decorar el filtro" 
        dregresar="postal" 
        dsiguiente="postal-nombre"
      />
      <Flores/>
    </div>
  )
}

export default PostalFlores