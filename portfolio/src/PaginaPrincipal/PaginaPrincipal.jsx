import React from 'react'
import Estudios from './Estudios'
import Tecnologias from './Tecnologias'
import { techs } from './distribuidor';


const PaginaPrincipal = () => {
  return (
    <div className='row'>
        <div className="col-md-2">
            <Estudios />
        </div>
        <div className="col-md-2">
            <div className='row mt-2'>
            <Tecnologias tecnologia={techs[0]} />
            </div>
            <div className='row mt-2'>
            <Tecnologias tecnologia={techs[5]} />
            </div>
        </div>
        <div className="col-md-2">
            <div className='row mt-2'>
            <Tecnologias tecnologia={techs[1]} />
            </div>
            <div className='row mt-2'>
            <Tecnologias tecnologia={techs[6]} />
            </div>
        </div>
        <div className="col-md-2">
            <div className='row mt-2'>
            <Tecnologias tecnologia={techs[2]} />
            </div>
            <div className='row mt-2'>
            <Tecnologias tecnologia={techs[7]} />
            </div>
        </div>
        <div className="col-md-2">
            <div className='row mt-2'>
            <Tecnologias tecnologia={techs[3]} />
            </div>
            <div className='row mt-4'>
            <Tecnologias tecnologia={techs[8]}/>
            </div>
        </div>
        <div className="col-md-2">
            <div className='row mt-2'>
            <Tecnologias tecnologia={techs[4]} />
            </div>
            <div className='row mt-2'>
            <Tecnologias tecnologia={techs[9]} />
            </div>
        </div>

    </div>
  )
}


export default PaginaPrincipal
