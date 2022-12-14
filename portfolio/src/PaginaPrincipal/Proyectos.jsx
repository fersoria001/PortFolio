import "./proyectos.css"



const proyecto_uno = {
  titulo: "Proyecto Ahorcado",
  imagen: require("./assets/ahorcado.jpg"),
  descripcion: "Juego de el Ahorcado utilizando HTML canvas con JS",
  repo: "https://github.com/fersoria001/ahorcado-oracle",
  demo: "https://fersoria001.github.io/ahorcado-oracle/"
}

const proyecto_dos = {
  titulo: "Proyecto desencriptador",
  imagen: require("./assets/encriptador.jpg"),
  descripcion: "Juego de desencriptador utilizando JS",
  repo: "https://github.com/fersoria001/encriptador-texto-oracle",
  demo: "https://fersoria001.github.io/encriptador-texto-oracle/"
}

const proyecto_tres = {
  titulo: "e-commerce",
  imagen: require("./assets/e-commerce.jpg"),
  descripcion: "E-Commerce FakeApi con JsonServer"
}


const Proyectos = () => {
  return (
<div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={proyecto_uno.imagen} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-block">
        <h5>{proyecto_uno.titulo}</h5>
        <p>{proyecto_uno.descripcion}</p>
        <a class="btn btn-primary" href={proyecto_uno.repo} role="button" target="_blank" rel="noopener noreferrer">Repository</a>
        <a class="btn btn-primary" href={proyecto_uno.demo} role="button" target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={proyecto_dos.imagen} className="w-100" alt="..." />
      <div className="carousel-caption d-block">
        <h5>{proyecto_dos.titulo}</h5>
        <p>{proyecto_dos.descripcion}</p>
        <a class="btn btn-primary" href={proyecto_dos.repo} role="button" target="_blank" rel="noopener noreferrer">Repository</a>
        <a class="btn btn-primary" href={proyecto_dos.demo} role="button" target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={proyecto_tres.imagen} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-block">
        <h5>{proyecto_tres.titulo}</h5>
        <p>{proyecto_tres.descripcion}</p>
        <p> coming soon..</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Proyectos
/* */