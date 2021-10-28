import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";

export default class Apuestas extends Component {
  state = {
    apuestas: [],
    equipos: [],
    status: false,
  };

  cargarApuestas = () => {
    var request = "api/Apuestas";
    var url = Global.urlChampions + request;
    axios.get(url).then((res) => {
      this.setState({
        apuestas: res.data,
      });
    });
  };

  componentDidMount = () => {
    this.cargarApuestas();
    this.cargarEquipos();
  };

  cargarEquipos = () => {
    var request = "api/Equipos";
    var url = Global.urlChampions + request;
    axios.get(url).then((res) => {
      this.setState({
        equipos: res.data,
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <br />
        <NavLink to="/apuesta" className="btn btn-danger">
          Realizar Apuesta
        </NavLink>
        <br />
        <br />

        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th scope="col">USUARIO</th>
              <th scope="col">RESULTADO</th>
              <th scope="col">FECHA</th>
            </tr>
          </thead>
          <tbody>
            {this.state.apuestas.map((apuesta, index) => {
              return (
                <tr key={index}>
                  <td>{apuesta.usuario}</td>
                  <td>{apuesta.resultado}</td>
                  <td>{apuesta.fecha}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
