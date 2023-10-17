import React from 'react'
import Iconos from './Iconos'
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <div className='row p-2' >
        <Iconos /> {/* "columna" */}
      </div>
      <div className='row'>
        <div className='col md-6 d-flex justify-content-center m-2'>
          <img src={require("./assets/icon_firma.png")} style={{ width: "24px", height: "24px" }} alt='..'></img>
          You can contact me trough the social media.
        </div>
      </div>
      <div className='container' id='container-formulario'>
      </div>
      <div className="p-4 d-flex justify-content-center">
        Copyright © 2022, Fernando Agustin Soria.
        <br />
        <br />
        Fernando Soria , Full-Stack Web Developer.
      </div>
    </div>
  )
}

export default Footer


