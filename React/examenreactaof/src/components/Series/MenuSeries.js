import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import image from "./../../assets/images/logo.svg";
import axios, { Axios } from "axios";

export default class MenuSeries extends Component {
  state = {
    series: [],
    status: false,
  };

  cargarSeries = () => {
    var request = "api/Series";
    var url = Global.urlSeries + request;
    console.log(url);
    axios.get(url).then((res) => {
      this.setState({
        series: res.data,
      });
    });
  };

  componentDidMount = () => {
    this.cargarSeries();
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
                  to="/Home"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/insertarPersonaje">
                  Nuevo Presonaje
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/modificarPersonaje">
                  Modificar Personaje
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
                  Series
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {this.state.series.map((serie, index) => {
                    return (
                      <li key={index} className="text-dark">
                        <NavLink
                          className="nav-link bg-white text-dark"
                          to={"/serie/" + serie.idSerie}
                        >
                          {serie.nombre}
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
