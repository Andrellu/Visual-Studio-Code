import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServicioCustomers/ServicioCustomers';
import BuscadorCustomer from './components/BuscadorCustomer/BuscadorCustomer';
import BuscadorCoches from './components/BuscadorCoches/BuscadorCoches';
import MaestroDetallesDepartamento from './components/MaestroDetallesDepartamentos/MaestroDetallesDepartamento';
import MaestroDetallesDep from './components/MaestroDetallesDepartamentos/MaestroDetallesDep';
import EmpleadosRouter from './components/RutasEmpleadosParametros/EmpleadosRouter';
import Router from "./components/Router";

ReactDOM.render(
  <div className="App">
    {/* <ServicioCustomers/> */}
    {/* <BuscadorCustomer/> */}
    {/* <BuscadorCoches/> */}
    {/* <MaestroDetallesDepartamento/> */}
    {/* <MaestroDetallesDep/> */}
    {/* <Router/> */}
    <App/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
