import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import { NavLink } from "react-router-dom";

export default class TablaDoctores extends Component {
  state = {
    doctores: [],
    status: false,
  };

  mostrarDoctor = () => {
    var request = "/api/Doctores";
    var url = Global.urlDoctores + request;
    console.log(url);
    axios.get(url).then((res) => {
      this.setState({
        doctores: res.data,
        status: true,
      });
      //console.log(res.data);
    });
  };

  componentDidMount = () => {
    this.mostrarDoctor();
  };

  render() {
    if (this.state.status == true) {
      return (
        <div>
          <br />
          <h1 className="App">TABLA DOCTORES</h1> <br />
          <br />
          <table className="table table-striped">
            <thead>
              <tr className="table-dark">
                <th scope="col">APELLIDO</th>
                <th scope="col">ESPECIALIDAD</th>
                <th scope="col">SALARIO</th>
              </tr>
            </thead>
            <tbody>
              {this.state.doctores.map((doc, index) => {
                return (
                  <tr key={index}>
                    <td>{doc.apellido}</td>
                    <td>{doc.especialidad}</td>
                    <td>{doc.salario}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else if (this.state.status == false) {
      return <h1>Cargando Datos ...</h1>;
    }
  }
}
