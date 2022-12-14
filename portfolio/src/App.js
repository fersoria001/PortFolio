import './App.css';
import BarraDeNavegacion from './BarraDeNavegacion/BarraDeNavegacion';
import Estudios from './PaginaPrincipal/Estudios';
import FilaDeCartas from './PaginaPrincipal/FilaDeCartas';
import Proyectos from './PaginaPrincipal/Proyectos';
import { techs, techs_uno } from './PaginaPrincipal/distribuidor';
import Footer from './Footer/Footer';

function App() {
  return (
  <div>
          <BarraDeNavegacion icono={require("./BarraDeNavegacion/icon_firma.png")} />
          <Proyectos />
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-4 sm-8'><h2> My TechStack </h2></div>
            </div>
          <FilaDeCartas techs={techs}/> {/*ya viene con un row --1*/}
          <FilaDeCartas techs={techs_uno}/> {/*ya viene con un row --2*/}
          <Estudios />  {/*ya viene con un row */}
          </div>
          <Footer />

      </div>

    );
}

export default App;
