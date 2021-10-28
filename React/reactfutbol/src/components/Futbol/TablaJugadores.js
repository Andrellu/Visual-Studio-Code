import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";

export default class TablaJugadores extends Component {
  state = {
    jugadores: [],
    status: false,
  };

  cargarJugadores = () => {
    var request = "api/Jugadores/JugadoresEquipo/" + this.props.idEquipo;
    var url = Global.urlChampions + request;
    console.log(url);
    axios.get(url).then((res) => {
      this.setState({
        jugadores: res.data,
      });
    });
  };

  componentDidMount = () => {
    this.cargarJugadores();
    console.log(this.props.idEquipo);
  };

  render() {
    return (
      <div>
        <br />
        <NavLink
          to={"/equipo/" + this.props.idEquipo}
          className="btn btn-danger"
        >
          Volver
        </NavLink>
        <h1>Tabla Jugadores</h1>
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th scope="col">NOMBRE</th>
              <th scope="col">IMAGEN</th>
              <th scope="col">DETALLES</th>
            </tr>
          </thead>
          <tbody>
            {this.state.jugadores.map((jugador, index) => {
              return (
                <tr key={index}>
                  <td>{jugador.nombre}</td>
                  <td>
                    <img height="100px" width="100px" src={jugador.imagen} />
                  </td>
                  <td>
                    <NavLink
                      className="btn btn-danger"
                      to={"/jugador/" + jugador.idJugador}
                    >
                      Detalles
                    </NavLink>
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
