//import logo from './logo.svg';
import Matematicas from '../Matematicas/Matematicas';
import Saludo from '../Saludo/Saludo';
import './../Saludo/Saludo';

function App() {
  const metodoPadre = (descripcion) =>{
    console.log("Soy la descripción." +  descripcion);
  }

  return (
    <div className="App">
      <Saludo Nombre="Andres" Edad="24" metodoPadre={metodoPadre}/>
      <Saludo Nombre="Sara" Edad="23" metodoPadre={metodoPadre}/>
    </div>
  );
}

export default App;
