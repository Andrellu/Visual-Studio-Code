import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";

export default class Jugador extends Component {
  state = {
    jugador: {},
    status: false,
  };

  cargarJugador = () => {
    var request = "api/Jugadores/" + this.props.idJugador;
    var url = Global.urlChampions + request;
    console.log(url);
    axios.get(url).then((res) => {
      this.setState({
        jugador: res.data,
      });
    });
  };

  componentDidMount = () => {
    this.cargarJugador();
    console.log(this.props.idJugador);
  };

  render() {
    return (
      <div>
        <h1>{this.state.jugador.nombre}</h1>
        <img height="100px" width="100px" src={this.state.jugador.imagen} />
        <h2>{this.state.jugador.posicion}</h2>
        <h3>Fecha de nacimeinto : {this.state.jugador.fechaNacimiento}</h3>
        <h3>Pais : {this.state.jugador.pais}</h3>
        <NavLink
          to={"/tablaJugadores/" + this.state.jugador.idEquipo}
          className="btn btn-danger"
        >
          Volver
        </NavLink>
      </div>
    );
  }
}
