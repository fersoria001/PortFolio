import React from 'react'
import "./tecnologias.css"

const Tecnologias = ({tecnologia}) => {
  return (
<div className="card" style={{width: "8rem"}}>
  <img className="card-img-top" src={tecnologia.logo} alt="logo" />
  <div className="card-body">
    <p className='small'>{tecnologia.tipo}</p>
  </div>
</div>
  )
}

export default Tecnologias
