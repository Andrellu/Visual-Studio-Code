import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Saludo from './components/Saludo/Saludo';
import Metodos from './components/Metodos/Metodos';
import reportWebVitals from './reportWebVitals';
import Ejemplo from './components/Ejemplo/Ejemplo';
import Padre from './components/Padre/Padre';

ReactDOM.render(
  <div className="App">
      <Padre/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();