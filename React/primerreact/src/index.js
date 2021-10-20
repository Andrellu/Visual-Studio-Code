import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Saludo from './components/Saludo/Saludo';
import Metodos from './components/Metodos/Metodos';
import reportWebVitals from './reportWebVitals';
import Ejemplo from './components/Ejemplo/Ejemplo';
import Padre from './components/Padre/Padre';
import Contador from './components/Contador/Contador';
import PadreDibujo from './components/Padre/PadreDibujo';
import Coche from './components/Coche/Coche';

ReactDOM.render(
  <div className="App">
      {/* <Padre/> */}
      {/* <Contador Inicio="0"/>
      <Contador Inicio="5"/>
      <Contador Inicio="10"/>
      <Contador Inicio="50"/> */}
      {/* <PadreDibujo/> */}
      <Coche Marca="Pontiac" Modelo="Firebird" Aceleracion="20" VelocidadMax="210"/>
      <Coche Marca="Nissan" Modelo="XTrail" Aceleracion="20" VelocidadMax="180"/>
      <Coche Marca="Seat" Modelo="600" Aceleracion="2" VelocidadMax="90"/>
      <Coche Marca="Audi" Modelo="A6 Sportback" Aceleracion="30" VelocidadMax="310"/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();