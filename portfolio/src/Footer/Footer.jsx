import React from 'react'
import Iconos from './Iconos'
import Mensaje from './Mensaje'

const Footer = () => {
  return (
  <div style={{background: "black"}}>
    <div className='row p-2' >
    <Iconos /> {/* "columna" */}
    </div>
  <div className='row'>
    <div className='col md-6 d-flex justify-content-center m-2'>
    I have made this Website using ReactJS. <br />
    You can contact me trough the social media or with the next form.
    </div>
  </div>
 <Mensaje />
 <div className="p-4 d-flex justify-content-center">
 Copyright Fernando Agustin Soria, all rights reserved.
 <br />
 Fernando Soria , Full-Stack Java Developer.
 </div>
  </div>
  )
}

export default Footer


