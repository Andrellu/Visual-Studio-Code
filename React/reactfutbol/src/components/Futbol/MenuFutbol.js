import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "./../Global";
import axios, { Axios } from "axios";
import image from "./../../assets/images/home.jpg";

export default class MenuFutbol extends Component {
  state = {
    equipos: [],
    status: false,
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

  componentDidMount = () => {
    this.cargarEquipos();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img style={{ height: "50px", width: "50px" }} src={image} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  to="/mostrarHome"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mostrarApuestas">
                  Apuestas
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Equipos
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {this.state.equipos.map((equi, index) => {
                    return (
                      <li key={index} className="text-dark">
                        <NavLink
                          className="nav-link bg-white text-dark"
                          to={"/equipo/" + equi.idEquipo}
                        >
                          {equi.nombre}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
