import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";

export default class CargarSerie extends Component {
  state = {
    serie: {},
    status: false,
  };

  cargarSerie = () => {
    var request = "api/Series/" + this.props.idSerie;
    var url = Global.urlSeries + request;
    console.log(url);
    axios.get(url).then((res) => {
      this.setState({
        serie: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    console.log(this.props.idSerie);
    this.cargarSerie();
  };
  componentDidUpdate = (propAnti) => {
    if (propAnti.idSerie != this.props.idSerie) {
      this.cargarSerie();
      console.log(this.props.idSerie);
    }
  };

  render() {
    return (
      <div>
        <h1>La series es : {this.state.serie.nombre}</h1>
        <img height="200px" width="200px" src={this.state.serie.imagen} />
        <h2>Puntuación : {this.state.serie.puntuacion}</h2>
        <NavLink
          to={"/personajes/" + this.props.idSerie}
          className="btn btn-danger"
        >
          Cargar Personajes
        </NavLink>
        <hr />
      </div>
    );
  }
}
