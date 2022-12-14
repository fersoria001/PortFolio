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
          <section id="home">
          <BarraDeNavegacion />
          </section>
          <section id="proyectos">
          <Proyectos />
          </section>
          <section id="about">
          <h2 className='text-center'> My TechStack</h2>
          <FilaDeCartas techs={techs}/> {/*ya viene con un row --1*/}
          <FilaDeCartas techs={techs_uno}/> {/*ya viene con un row --2*/}
          <Estudios />  {/*ya viene con un row */}
          </section>
          <section id="footer">
          <Footer />
          </section>
      </div>
    );
}

export default App;
