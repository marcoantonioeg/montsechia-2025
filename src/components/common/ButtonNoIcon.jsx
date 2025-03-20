import React from 'react'
import "./ButtonNoIcon.css"
import { Link } from 'react-router-dom';
const ButtonNoIcon = ({text, direction}) => {
  return (
   <Link to={`/${direction}`}>
   <button className='buttonNoIcon'>{text}</button>
   </Link>
  )
}

export default ButtonNoIcon