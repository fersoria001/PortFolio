import React from 'react'

const Mensaje = () => {
  return (
<form>
  <div className="form-group mb-2">
    <input type="text" className="form-control" id='nombre' placeholder="Name" />
  </div>
  <div className='form-group mb-2'>
    <input type="text" className="form-control" id="apellido" placeholder="Surname" />
  </div>
    <div className="form-group mb-2">
    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
  </div>
  <div className="form-group mb-2">
    <textarea className="form-control" id="mensaje" rows="3"></textarea>
  </div>
  <div className="form-group mb-2">
  <button className="btn btn-primary mt-2" type="submit">Submit</button>
  </div>
</form>
  )
}

export default Mensaje
