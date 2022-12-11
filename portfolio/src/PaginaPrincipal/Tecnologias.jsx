import React from 'react'
import "./tecnologias.css"

const Tecnologias = ({tecnologia}) => {
  return (
<div className="card align-items-center mt-2" style={{width: "50px"
,height: "32px", border: "none"}}>
  <img className="card-img-top" style={{
    width:"16px",
    height: "16px"
  }} src={tecnologia.logo} alt="logo" />
    <h5 className="small">{tecnologia.tipo}</h5>
</div>
  )
}

export default Tecnologias
