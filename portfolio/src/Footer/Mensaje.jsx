import React from 'react'

const Mensaje = () => {
  return (
<form className='p-4'>
  <div className="row justify-content-center p-2">
    <div className="col-4">
      <input type="text" className="form-control" placeholder="First name" />
    </div>
    <div className="col-4">
      <input type="text" className="form-control" placeholder="Last name" />
    </div>
  </div>
  <div className='row justify-content-center p-2'>
    <div className='col-4'>
      <textarea className='form-control-lg'/>
    </div>
    <div className='col-4'>
      <input type="email" className='form-control' placeholder='E-mail' />
    </div>
    <div className='row justify-content-center p-2'>
    <div className='col-2'>
        <button className='form-control'> click me pls</button>
        </div>
    </div>
  </div>
  </form>
  )
}

export default Mensaje
