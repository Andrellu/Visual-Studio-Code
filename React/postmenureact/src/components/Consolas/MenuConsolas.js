import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logoXbox from '../../assets/images/logos/logo_xbox_lightgreen.png';
import logoPS from '../../assets/images/logos/logo_playstation.png';
import logoNintendo from '../../assets/images/logos/logo_nintendo.png';

export default class MenuConsolas extends Component {
  state = {
    consolasNintendo: [
      "Game Advance",
      "Nintendo DS",
      "Nintendo 3DS",
      "Nintendo 2DS",
      "Nintendo Switch",
    ],
    consolasPS: [
      "PlayStation 1",
      "PlayStation 2",
      "PSP 3000",
      "PlayStation 3",
      "PSP Vita",
      "PlayStation 4",
      "PlayStation 5",
    ],
    consolasXBOX: ["Xbox", "Xbox 360", "Xbox One", "Xbox Series X|S"],
    nintendo : "Nintendo",
    xbox : "xbox",
    ps : "ps"
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{backgroundColor:"darkgray", color:"chocolate"}}>
          <NavLink className="navbar-brand" to="/home">
            Inicio
          </NavLink>
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
            <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="dropdown03"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Consola Nintendo
                </span>
                <ul className="dropdown-menu text-center" aria-labelledby="dropdown03">
                  <li>
                    <NavLink style={{backgroundColor: "silver", color: "darkblue"}} to="/mostrarNintendo" className="dropdown-item">
                      <b><img className="ms-2" src={logoNintendo} alt="xbox" width="100px"/></b>
                    </NavLink>
                  </li>
                  {this.state.consolasNintendo.map((consola, index) => {
                      return (
                          <li key={index} className="text-dark">
                              <NavLink style={{backgroundColor:"darkred"}} to={"/mostrarConsola/" + consola} className="nav-link text-white">
                                  {consola}
                              </NavLink>
                        </li>
                      );
                  })}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="dropdown03"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Consola PlayStation
                </span>
                <ul className="dropdown-menu text-center" aria-labelledby="dropdown03">
                  <li>
                    <NavLink style={{backgroundColor: "darkblue", color: "lightskyblue"}} to="/mostrarPlayStation" className="dropdown-item">
                      <b><img className="ms-2" src={logoPS} alt="xbox" width="100px"/></b>
                    </NavLink>
                  </li>
                  {this.state.consolasPS.map((consola, index) => {
                      return (
                          <li key={index} className="text-dark">
                              <NavLink style={{backgroundColor:"lightblue"}} to={"/mostrarConsola/" + consola} className="nav-link text-dark">
                                  {consola}
                              </NavLink>
                        </li>
                      );
                  })}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="dropdown03"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Consola Xbox
                </span>
                <ul className="dropdown-menu text-center" aria-labelledby="dropdown03">
                  <li>
                    <NavLink style={{backgroundColor: "darkgreen", color: "lightgray"}} to="/mostrarXbox" className="dropdown-item">
                      <b><img className="ms-2" src={logoXbox} alt="xbox" width="100px"/></b>
                    </NavLink>
                  </li>
                  {this.state.consolasXBOX.map((consola, index) => {
                      return (
                          <li key={index} className="text-dark">
                              <NavLink style={{backgroundColor:"lightgreen"}} to={"/mostrarConsola/" + consola} className="nav-link text-dark">
                                  {consola}
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
