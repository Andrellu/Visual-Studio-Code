import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";

export default class Equipos extends Component {
  state = {
    equipo: {},
    status: false,
  };

  mostrarEquipo = () => {
    var request = "api/Equipos/" + this.props.idEquipo;
    var url = Global.urlChampions + request;
    console.log(url);
    axios.get(url).then((res) => {
      this.setState({
        equipo: res.data,
        status: true,
      });
      //console.log(res.data);
      console.log(this.state.equipo.nombre);
    });
  };

  componentDidMount = () => {
    this.mostrarEquipo();
    console.log(this.props.idEquipo);
  };

  componentDidUpdate = (propAnti) => {
    if (propAnti.idEquipo != this.props.idEquipo) {
      this.mostrarEquipo();
    }
  };

  render() {
    return (
      <div>
        <h1>El equipo es : {this.state.equipo.nombre}</h1>
        <img height="100px" width="100px" src={this.state.equipo.imagen} />
        <h2>{this.state.equipo.champions}</h2>
        <p>{this.state.equipo.descripcion}</p>
        <NavLink
          className="btn btn-danger"
          to={"/tablaJugadores/" + this.props.idEquipo}
        >
          Jugadores
        </NavLink>
      </div>
    );
  }
}
