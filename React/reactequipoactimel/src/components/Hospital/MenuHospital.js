import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class MenuHospital extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MENU
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
                  to="/mostrarHospital"
                  aria-current="page"
                >
                Hospitales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/insertarHospital">
                  Nuevo Hospital
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/modificarHospital">
                  Modificar Hospital
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/eliminarHospital">
                  Eliminar Hospital
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
        )
    }
}
