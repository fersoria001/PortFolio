import './App.css';
import BarraDeNavegacion from './BarraDeNavegacion/BarraDeNavegacion';
import Estudios from './PaginaPrincipal/Estudios';
import FilaDeCartas from './PaginaPrincipal/FilaDeCartas';
import Proyectos from './PaginaPrincipal/Proyectos';
import { techs, techs_uno } from './PaginaPrincipal/distribuidor';
import Footer from './Footer/Footer';

const rionegro = {
  institucion: "UNRN",
  carrera: "Ingenieria en Computacion",
  fecha: "2022",
  imagen: require("./PaginaPrincipal/assets/unrnlogo.jpg")
}

const cordoba = {
  institucion: "UNC",
  carrera: "Lic. Kinesiologia y Fisioterapia",
  fecha: "2016",
  imagen: require("./PaginaPrincipal/assets/unclogo.jpeg")
}


const oracle = {
  institucion: "OracleNEXT",
  carrera: "Desarrollador Web FullStack Java",
  fecha: "2022",
  imagen: require("./PaginaPrincipal/assets/alura_logo.png")
}

function App() {
  return (
  <div>
          <BarraDeNavegacion icono={require("./BarraDeNavegacion/icon_firma.png")} />
          <Proyectos />
          <div className='container'>
          <FilaDeCartas techs={techs}/> {/*ya viene con un row --1*/}
          <FilaDeCartas techs={techs_uno}/> {/*ya viene con un row --2*/}
          <Estudios estudio={rionegro} />  {/*ya viene con un row */}
          </div>
          <Footer />

      </div>

    );
}

export default App;
