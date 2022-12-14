import React from 'react'
import "./estudios.css"

const rionegro = {
    institucion: "UNRN",
    carrera: "Ingenieria en Computacion",
    fecha: "2022",
    imagen: require(".//assets/unrnlogo.jpg")
}
const oracle = {
    institucion: "OracleNEXT",
    carrera: "Desarrollador Web FullStack Java",
    fecha: "2022",
    imagen: require(".//assets/alura_logo.png")
}

const Estudios = () => {
  return (
    <div className='container-fluid mt-4'>
        <div className='row'>
            <div className='col'>
            <div className="card text-center">
                <img className="card-img-top" src={rionegro.imagen} alt="logo" style={{width: "40px", height: "50px"}} />
                 <div className="card-body">
                    <h5 className='card-title'>{rionegro.institucion}</h5>
                    <p className='card-text'>{rionegro.carrera}</p>
                    </div>
            </div>
            </div>
            <div className='col'>
            <div className="card  text-center">
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
