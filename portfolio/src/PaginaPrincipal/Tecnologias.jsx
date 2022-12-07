import React from 'react'

const Tecnologias = ({tecnologia}) => {
  return (
<div classNameName="card" style={{width: "5rem"}}>
    <img src={tecnologia.logo} classNameName="card-img-top" alt=''/>
    <div classNameName="card-body">
    <h6 classNameName="card-title">{tecnologia.tipo}</h6>
    </div>
</div>
  )
}

export default Tecnologias
