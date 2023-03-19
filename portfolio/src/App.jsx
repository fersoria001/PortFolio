import './App.css';
import BarraDeNavegacion from './BarraDeNavegacion/BarraDeNavegacion';
import Estudios from './PaginaPrincipal/Estudios';
import FilaDeCartas from './PaginaPrincipal/FilaDeCartas';
import Proyectos from './PaginaPrincipal/Proyectos';
import { techs, techs_uno } from './PaginaPrincipal/distribuidor';
import Footer from './Footer/Footer';
import { SobreMi } from './PaginaPrincipal/SobreMi';
import Repositorios from './PaginaPrincipal/Repositorios'

function App() {
  return (
  <div>
          <section id="home">
          <BarraDeNavegacion />
          </section>
          <section id="proyectos">
          <Proyectos />
          </section>
          <section id="about">
          <div className='p-4 mt-4'>
          <h2 className='text-center'> My TechStack</h2>
          <FilaDeCartas techs={techs}/> {/*ya viene con un row --1*/}
          <FilaDeCartas techs={techs_uno}/> {/*ya viene con un row --2*/}
          <Estudios />  {/*ya viene con un row */}
          <SobreMi></SobreMi>
          <Repositorios />
          </div>
          </section>
          <section id="footer">
          <Footer />
          </section>
      </div>
    );
}

export default App;
