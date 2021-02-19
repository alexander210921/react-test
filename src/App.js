import logo from './logo.svg';
import './App.css';
import App1 from './Componentes/App'
import LikesCont from './Componentes/MutacionDeEstado'
import Gato from './Componentes/spredOperatorParaProps'
import OtrosDatosDeGato from './Componentes/MasDatosDeLaMascota'
import EventoOnchange from './Componentes/EventoOnChange'
import EventoDomEjemplo from './Componentes/EventoNativoeventoSintetico'
import PadreElement from './Componentes/EventosPersonalizados'
import Inyeccion from './Componentes/InyectarHTMLEnMarcado'
import ModalTest from './Componentes/Portals'
import PropTest from './Componentes/Proptypes'
import EjemploIteracion1 from './Componentes/Iteraciones1'
import EjemploDeIteracion2 from './Componentes/Iteraciones2'
import EjemploDeIteraciones3 from './Componentes/Iteraciones3'
import EjemploDeIteraciones4 from './Componentes/Iteraciones4'
import EjemploDeIteraciones5 from './Componentes/Iteracion5'
import ReactRefa from './Componentes/Refs'
import Formulario1 from './Componentes/Formulario1'
import API1 from './Componentes/API1'
import MoviSearch from './Componentes/SearchMovie'
import DidMount from './Componentes/ComponenteDidMount'
import EjemploUpdate from './Componentes/componenteDisUpdate'
import AppEjemploDeDidUpdate from './Componentes/componenteDisUpdate';
 

function App() {
  return (
    <div className="App">
      <App1 />
      <LikesCont />
      <Gato name={'Garfield'} age={12} {...OtrosDatosDeGato}/>
      <EventoOnchange />
      <EventoDomEjemplo />
      <PadreElement />
      <Inyeccion />
      <ModalTest > 
        <div>
        div
        </div>
      </ModalTest>
      <PropTest name={"Prueba de nombre"}  bio={'esta es la bio'} email ={'este es el email'} /> 
      {/* no fue necesario colocarle el nombre gracias a los defaulPros  que se agrego dentro del componente */}

      <EjemploIteracion1 />
      <EjemploDeIteracion2 />
      <EjemploDeIteraciones3 />
      <EjemploDeIteraciones4 />
      <EjemploDeIteraciones5 />
      <ReactRefa />
      <Formulario1 />
      <API1 />
      <MoviSearch />
      <DidMount nombre ={'test-didMount'} />
      <AppEjemploDeDidUpdate  />
      

      <header className="App-header">            
      </header>
    </div>
  );
}

export default App;
