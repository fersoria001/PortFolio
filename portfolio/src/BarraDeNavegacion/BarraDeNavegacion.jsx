import React from 'react'
import "./barra_de_navegacion.css"

const BarraDeNavegacion = ({icono}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1"> 
    <img src={icono} width="30" height="30" className="d-inline-block align-top" alt="">
    </img> Fercho
    </span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#"> Projectos </a>
        </li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Redes Sociales
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"> Contactos </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default BarraDeNavegacion
