import axios from "axios";
import React, { Component } from "react";
import Global from "../Global";
import { NavLink } from "react-router-dom";

export default class CargarPersonajes extends Component {
  state = {
    personajes: [],
    status: false,
  };

  cargarTabla = () => {
    var request = "api/Series/PersonajesSerie/" + this.props.idSerie;
    var url = Global.urlSeries + request;
    console.log(url);
    axios.get(url).then((res) => {
      this.setState({
        personajes: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    console.log(this.props.idSerie);
    this.cargarTabla();
  };
  render() {
    return (
      <div>
        <br />
        <h1>Tabla Personajes</h1>
        <br />
        <NavLink to={"/serie/" + this.props.idSerie} className="btn btn-danger">
          Volver
        </NavLink>
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th scope="col">NOMBRE</th>
              <th scope="col">IMAGEN</th>
            </tr>
          </thead>
          <tbody>
            {this.state.personajes.map((personaje, index) => {
              return (
                <tr key={index}>
                  <td>{personaje.nombre}</td>
                  <td>
                    <img height="100px" width="100px" src={personaje.imagen} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
