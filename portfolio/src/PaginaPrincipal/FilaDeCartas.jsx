import React from 'react'
import Tecnologias from './Tecnologias'

function repartidor(arreglo)
{
  const maximo_de_fila = 5;
  let i = 0;
  let arreglo_jsx = [];
  do
  {
    arreglo_jsx.push(
      <div className="col-md-2">
      <Tecnologias tecnologia={arreglo[i]} />
      </div>
    )
    i++;
  }while(i<maximo_de_fila);
  return arreglo_jsx;
}

const FilaDeCartas = (props) => {
  return (
    <div className='row justify-content-center'>
    {repartidor(props.techs)}
    </div>
  )
}


export default FilaDeCartas
