import "./estudios.css"

const rionegro = {
    institucion: "UNRN",
    carrera: "Ingenieria en Computacion",
    fecha: "2022",
    imagen: require("./unrnlogo.jpg")
}

const cordoba = {
    institucion: "UNC",
    carrera: "Lic. Kinesiologia y Fisioterapia",
    fecha: "2016",
    imagen: require("./unclogo.jpeg")
}


const oracle = {
    institucion: "OracleNEXT",
    carrera: "Desarrollador Web FullStack Java",
    fecha: "2022",
    imagen: require("./alura_logo.png")
}



const Estudios = () => {
  return (
<div  className="carousel slide" data-ride="carousel" data-interval="3000">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={rionegro.imagen} alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>{rionegro.institucion}</h5>
        <p>
            {rionegro.carrera}
            <br></br>
            {rionegro.fecha}
        </p>
     </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={cordoba.imagen} alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>{cordoba.institucion}</h5>
        <p>
            {cordoba.carrera}
            <br></br>
            {cordoba.fecha}
        </p>
     </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={oracle.imagen} alt="Third slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>{oracle.institucion}</h5>
        <p>
            {oracle.carrera}
            <br></br>
            {oracle.fecha}
        </p>
     </div>
    </div>
  </div>
</div>
  )
}

export default Estudios
/* */