import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Contador from './components/Contador/Contador';
import Deportes from './components/Deportes/Deportes';
import DibujosComplejos from './components/DibujosComplejos/DibujosComplejos';
import Numeros from './components/Numeros/Numeros';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="App">
      {/* <Contador Inicio="5"/>
      <Contador Inicio="50"/> */}
      {/* <DibujosComplejos/> */}
      {/* <Deportes/> */}
      <Numeros/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
