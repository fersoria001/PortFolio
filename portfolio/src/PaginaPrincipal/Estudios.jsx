import React from 'react'

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
    <div className='row justify-content-center mt-4'>
        <div className='col-md-2'>
            <div className="card" style={{width: "40px", height: "50px"}}>
                <img className="card-img-top" src={rionegro.imagen} alt="logo" style={{width: "40px", height: "50px"}} />
                 </div>
                 <div className="card-body">
                    <h5 className='card-title'>{rionegro.institucion}</h5>
                    <p className='card-text'>{rionegro.carrera}</p>
            </div>
        </div>
        <div className='col-md-2'>
            <div className="card" style={{width: "40px", height: "50px"}} >
                <img className="card-img-top" src={oracle.imagen} alt="logo" style={{width: "40px", height: "50px"}} />
                 </div>
                 <div className="card-body">
                    <h5 className='card-title'>{oracle.institucion}</h5>
                    <p className='card-text'>{oracle.carrera}</p>
            </div>
        </div>
    </div>
  )
}

export default Estudios
