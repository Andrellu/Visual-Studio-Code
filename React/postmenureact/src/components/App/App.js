import logo from './../../assets/images/logo.svg';
import './App.css';
// import necesarios para Boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle";
// Import para el router.
import Router from "./../Router";

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
