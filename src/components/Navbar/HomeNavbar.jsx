import React from 'react'
import "./Navbar.css";
import "./HomeNavbar.css"
import Instagram from '../../assets/images/instagram.svg'
import Tiktok from '../../assets/images/tiktok.svg'

const HomeNavbar = () => {
  return (
    <div className='container socialbar'>
            <center>
                <div className='flex'>
                   
                    <div className='tiktok'>
                    <img src={Tiktok} alt="" className='social-icon' srcSet="" />
                    </div>
                    
                </div>
            </center>
        
    </div>
  )
}

export default HomeNavbar