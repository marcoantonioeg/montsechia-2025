import React from 'react'
import Hoja from '../../public/images/flor.png'
import './title.css'
const Title = ({text1, text2}) => {
  return (
    <div className='title-container'>


    <center>

    <h1 className='text1 titulo mediano'>    <img className="hoja" src={Hoja} alt="" srcSet="" />
    {text1}</h1>
    <h1 className='text2 titulo grande'>{text2}</h1>
        </center>
    </div>
  )
}

export default Title