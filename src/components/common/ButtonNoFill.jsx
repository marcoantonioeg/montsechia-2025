import React from 'react'
import "./ButtonNoFill.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight} from '@fortawesome/free-solid-svg-icons';
const ButtonNoFill = ({text}) => {
  return (
    <button className='buttonNoFill'>{text} <FontAwesomeIcon icon={faArrowRight} className='arrow' /></button>
  )
}

export default ButtonNoFill