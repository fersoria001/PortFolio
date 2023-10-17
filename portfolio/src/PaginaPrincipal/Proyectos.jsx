import "./proyectos.css";

const proyectos = [
  {
    titulo: "En-Conexion",
    imagen: require("./assets/en-conexion.png"),
    descripcion: `Back-end of a health social network with payment gateway, messaging, full-text search, geolocation, cybersecurity, etc.`,
    repo: "private",
    demo: "http://dev.en-conexion.com/",
  },
  {
    titulo: "Hangman Project",
    imagen: require("./assets/ahorcado.jpg"),
    descripcion: "Hangman game using HTML canvas with JS.",
    repo: "https://github.com/fersoria001/ahorcado-oracle",
    demo: "https://fersoria001.github.io/ahorcado-oracle/",
  },
  {
    titulo: "Decryption Project",
    imagen: require("./assets/encriptador.jpg"),
    descripcion: "Decryption game using JS.",
    repo: "https://github.com/fersoria001/encriptador-texto-oracle",
    demo: "https://fersoria001.github.io/encriptador-texto-oracle/",
  },
  {
    titulo: "E-commerce Project",
    imagen: require("./assets/e-commerce.jpg"),
    descripcion: "E-commerce with FakeApi using JsonServer.",
    repo: "https://github.com/fersoria001/Emerald-Blue",
  },
  {
    titulo: "Java SpringBoot E-Commerce API",
    imagen: require("./assets/e-commerce-api.png"),
    descripcion: "Web application based on websockets for an online store with a chatbot that communicates with OpenAI.",
    repo: "https://github.com/fersoria001/TiendaOpenAI-Api"
  }
];

const Proyectos = () => {
  return (
<div id="carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    {proyectos.map((proyecto, index) => (
      <button
        key={index}
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to={index}
        className={index === 0 ? "active" : ""}
        aria-label={`Slide ${index + 1}`}
      ></button>
    ))}
  </div>
  <div className="carousel-inner">
    {proyectos.map((proyecto, index) => (
      <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
        <img src={proyecto.imagen} className="d-block w-100" alt={proyecto.titulo} />
        <div className="carousel-caption d-block">
          <h5>{proyecto.titulo}</h5>
          <p>{proyecto.descripcion}</p>
          {proyecto.repo && (
            <a className="btn btn-primary" href={proyecto.repo} role="button" target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          )}
          {proyecto.demo && (
            <a className="btn btn-primary" href={proyecto.demo} role="button" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default Proyectos;