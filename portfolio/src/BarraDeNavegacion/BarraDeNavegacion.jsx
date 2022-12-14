import React from 'react'
import "./barra_de_navegacion.css"

const BarraDeNavegacion = ({icono}) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1"> 
    <img src={icono} width="30" height="30" className="d-inline-block align-top" alt="">
    </img> Fernando Soria
    </span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="https://pdfhost.io/v/ARO2cS4Y3_FernandoASoria" target="_blank" rel="noopener noreferrer"> Download my CV </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default BarraDeNavegacion
