import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Contador from './components/Contador/Contador';
import DibujosComplejos from './components/DibujosComplejos/DibujosComplejos';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
      {/* <Contador Inicio="5"/>
      <Contador Inicio="50"/> */}
      <DibujosComplejos/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
