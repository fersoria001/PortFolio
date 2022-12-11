import React from 'react'
import Iconos from './Iconos'
import Mensaje from './Mensaje'

const Footer = () => {
  return (
  <div style={{background: "black"}}>
    <div className='row p-2' >
    <Iconos /> {/* "columna" */}
      <div className='col md-6 d-flex justify-content-start'>
        Texto del Footer
      </div>
    </div>
  <div className='row'>
    <div className='col md-6 d-flex justify-content-center m-2'>
    segunda fila DEL Footer
    </div>
  </div>
 <Mensaje />
 <div className="p-4 d-flex justify-content-center">
 copyright
 <br />
 mi firma y fin del footer
 </div>
  </div>
  )
}

export default Footer


