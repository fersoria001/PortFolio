import React from 'react'
import "./estudios.css"

const rionegro = {
    institucion: "UNRN",
    carrera: "Computer Engineering",
    fecha: "2022",
    imagen: require(".//assets/unrnlogo.jpg")
}
const oracle = {
    institucion: "OracleNEXT",
    carrera: "FullStack Web Developer",
    fecha: "2022",
    imagen: require(".//assets/alura_logo.png")
}

const Estudios = () => {
  return (
    <div className='container-fluid py-5'>
        <h2 className='py-2 text-center'> My Education </h2>
        <div className='row'>
            <div className='col'>
            <div className="card text-center MyCard">
                <img className="card-img-top" src={rionegro.imagen} alt="logo" style={{width: "40px", height: "50px"}} />
                 <div className="card-body">
                    <h5 className='card-title'>{rionegro.institucion}</h5>
                    <p className='card-text'>{rionegro.carrera}</p>
                    </div>
            </div>
            </div>
            <div className='col'>
            <div className="card  text-center MyCard">
                <img className="card-img-top" src={oracle.imagen} alt="logo" style={{width: "40px", height: "50px"}} />
                 <div className="card-body">
                    <h5 className='card-title'>{oracle.institucion}</h5>
                    <p className='card-text'>{oracle.carrera}</p>
                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Estudios
