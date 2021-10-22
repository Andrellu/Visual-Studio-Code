import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import App from './components/App/App';
import Comics from './components/Comics/Comics';
import Contador from './components/Contador/Contador';
import Deportes from './components/Deportes/Deportes';
import DibujosComplejos from './components/DibujosComplejos/DibujosComplejos';
import Numeros from './components/Numeros/Numeros';
import Cine from './components/Rutas/Cine';
import Home from './components/Rutas/Home';
import Musica from './components/Rutas/Musica';
import Television from './components/Rutas/Television';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MenuRutas from './components/Rutas/MenuRutas';

ReactDOM.render(
  <div className="App">
      {/* <Contador Inicio="5"/>
      <Contador Inicio="50"/> */}
      {/* <DibujosComplejos/> */}
      {/* <Deportes/> */}
      {/* <Numeros/> */}
      {/* <Comics/> */}
      <MenuRutas/>
      <Router/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
