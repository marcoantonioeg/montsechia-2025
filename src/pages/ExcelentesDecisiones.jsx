import React from 'react'
import './ExcelentesDecisiones.css'
import { Link } from 'react-router-dom'
const ExcelentesDecisiones = () => {
  return (
    <div className='container pb-5 mb-5'>
      <div className="col-lg-12">
         <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
               <h2 className='titulo postal-title text-center pt-5 pb-3'>¡eXCELENTEs DECISIONES!</h2>
               <div className='shopping-div'>
               <i class="fas fa-shopping-cart carrito-final"></i>      
                 
            </div>
            <div className='shopping-div'>
               <Link to="/checkout">
            <button className="add-to-cart titulo cuadro"
               >Checkout</button> 
               </Link>
            </div>
            </div>
            <div className="col-lg-2"></div>
         </div>
      </div>
    </div>
  )
}

export default ExcelentesDecisiones