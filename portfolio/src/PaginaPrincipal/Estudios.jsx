import React from 'react';
import './estudios.css';

const studies = [
    {
        institucion: 'Universidad Nacional de Río Negro',
        carrera: 'Computer Engineering',
        duracion: '2022 - Present',
        fecha: '2027',
        imagen: require('./assets/unrnlogo.jpg'),
    },
    {
        institucion: 'OracleNEXT',
        carrera: 'FullStack Web Developer',
        duracion: '2022 - 2023',
        fecha: '2023', 
        imagen: require('./assets/alura_logo.png'),
    },
    {
        institucion: 'Universidad Nacional de Córdoba',
        carrera: 'Bachelor\'s Degree in Kinesiology and Physiotherapy',
        duracion: '2016 - 2022',
        fecha: 'Unfinished(5th year)', 
        imagen: require('./assets/unclogo.jpeg'),
    },
];

const Estudios = () => {
    return (
        <div className="container-fluid py-5">
            <h2 className="py-2 text-center">My Education</h2>
            <div className="row">
                {studies.map((study, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                        <div className="card text-center MyCard">
                            <img
                                className="card-img-top"
                                src={study.imagen}
                                alt="logo"
                                style={{ width: '40px', height: '50px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{study.institucion}</h5>
                                <p className="card-text">{study.carrera}</p>
                                {study.duracion && (
                                    <p className="card-text">
                                        <small className="text-muted">{study.duracion}</small>
                                    </p>
                                )}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Estudios;
