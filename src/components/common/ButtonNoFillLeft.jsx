import React from 'react'
import "./ButtonNoFill.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight} from '@fortawesome/free-solid-svg-icons';
const ButtonNoFillLeft = ({text, direction}) => {
  return (
    <Link to={`/${direction}`}>
    <button className='buttonNoFill float-left-button'>{text} <FontAwesomeIcon icon={faArrowRight} className='arrow' /></button>
    </Link>
  )
}

export default ButtonNoFillLeft