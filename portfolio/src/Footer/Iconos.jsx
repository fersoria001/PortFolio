import React from 'react'

const Iconos = () => {
  return (
      <div className='col md-6 d-flex justify-content-center mt-1 gap-1'>
        <a href="https://www.facebook.com/feerr.soria/" target="_blank" rel="noopener noreferrer">
        <img className='img-fluid' src={require("./assets/facebook.png")} style={{height: "16px", width: "16px"}} alt='fbicon' /></a>
        <a href='https://www.instagram.com/fersoria.1' target="_blank" rel="noopener noreferrer">
        <img className='img-fluid' src={require("./assets/instagram_icon.png")} style={{height: "16px", width: "16px"}} alt='igicon' /></a>
        <a href='https://www.linkedin.com/in/fernandosoria1t' target="_blank" rel="noopener noreferrer">
        <img className='img-fluid' src={require("./assets/linkedin_icon.png")} style={{height: "16px", width: "16px"}} alt='liicon' /> </a>
        <a href='https://www.github.com/fersoria001' target="_blank" rel="noopener noreferrer">
        <img className='img-fluid' src={require("./assets/github_icon.png")} style={{height: "16px", width: "16px", background: "white"}} alt='ghicon' /></a>
      </div>
  )
}

export default Iconos
