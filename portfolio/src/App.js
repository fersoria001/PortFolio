import './App.css';
import BarraDeNavegacion from './BarraDeNavegacion/BarraDeNavegacion';
import PaginaPrincipal from './PaginaPrincipal/PaginaPrincipal';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <BarraDeNavegacion icono={require("./BarraDeNavegacion/icon_firma.png")} />
      </div>
        <PaginaPrincipal />
    </div>
  );
}

export default App;
