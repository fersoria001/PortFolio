import "./App.css";
import BarraDeNavegacion from "./BarraDeNavegacion/BarraDeNavegacion";
import Estudios from "./PaginaPrincipal/Estudios";
import Proyectos from "./PaginaPrincipal/Proyectos";
import { techs } from "./PaginaPrincipal/tech_icons_data";
import Footer from "./Footer/Footer";
import { SobreMi } from "./PaginaPrincipal/SobreMi";
import Repositorios from "./PaginaPrincipal/Repositorios";
import DevToArticles from "./PaginaPrincipal/DevToArticles";
import TechIcons from "./PaginaPrincipal/TechIcons";

function App() {
  return (
    <div classname="App">
      <section id="home">
        <BarraDeNavegacion />
      </section>
      <section id="carouselbanner">
        <Proyectos />
      </section>
      <section id="about">
        <DevToArticles />
        <TechIcons techList={techs} />
        <Estudios /> {/*ya viene con un row */}
        <SobreMi></SobreMi>
        <section id="projects">
          <Repositorios />
        </section>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
