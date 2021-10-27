import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetallesDepartamento extends Component {
  numDep = this.props.idDepartamento;
  nom = this.props.nombre;
  locali = this.props.localidad;

  render() {
    return (
      <div>
        <h1>Detalles</h1>
        <h2>{this.numDep}</h2>
        <h2>{this.nom}</h2>
        <h2>{this.locali}</h2>
        <NavLink to="/departamentos" className="btn btn-info">
          Volver al listado
        </NavLink>
      </div>
    );
  }
}
