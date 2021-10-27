import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import { NavLink } from "react-router-dom";

export default class TablaDepartamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };

  cargarDepartamentos = () => {
    var request = "/webresources/departamentos";
    var url = Global.urlCrudDepartamentos + request;
    axios.get(url).then((res) => {
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarDepartamentos();
  };

  render() {
    if (this.state.status == true) {
      return (
        <div>
          <br />
          <h1 className="App">TABLA DEPARTAMENTOS</h1> <br />
          <br />
          <table className="table table-striped">
            <thead>
              <tr className="table-dark">
                <th scope="col">NUMERO</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">LOCALIDAD</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.departamentos.map((dep, index) => {
                return (
                  <tr className="table-secondary" key={index}>
                    <td>{dep.numero}</td>
                    <td>{dep.nombre}</td>
                    <td>{dep.localidad}</td>
                    <td>
                      <NavLink
                        to={
                          "/detallesDepartamento/" +
                          dep.numero +
                          "/" +
                          dep.nombre +
                          "/" +
                          dep.localidad
                        }
                        className="btn btn-success"
                      >
                        Detalles
                      </NavLink>{" "}
                      <NavLink
                        className="btn btn-warning"
                        to={"/modificarDepartamento/" + dep.numero}
                      >
                        Modificar
                      </NavLink>{" "}
                      <NavLink
                        className="btn btn-danger"
                        to={
                          "/deleteDepartamento/" +
                          dep.numero +
                          "/" +
                          dep.nombre +
                          "/" +
                          dep.localidad
                        }
                      >
                        Eliminar
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else if (this.state.status == false) {
      return <h1>Cargando registros ... </h1>;
    }
  }
}
