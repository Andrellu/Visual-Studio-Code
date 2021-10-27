import axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

export default class DoctoresAnadir extends Component {
  cajaIdHospital = React.createRef();
  cajaIdDoctor = React.createRef();
  cajaApellido = React.createRef();
  cajaEspecialidad = React.createRef();
  cajaSalario = React.createRef();

  state = {
    status: false,
  };

  insertarDoctor = (e) => {
    e.preventDefault();
    var idHospital = parseInt(this.cajaIdHospital.current.value);
    var idDoctor = parseInt(this.cajaIdDoctor.current.value);
    var apelli = this.cajaApellido.current.value;
    var espe = this.cajaEspecialidad.current.value;
    var sal = parseInt(this.cajaSalario.current.value);

    var request = "/api/Doctores";
    var url = Global.urlDoctores + request;

    var doctor = {
      idDoctor: idDoctor,
      idHospital: idHospital,
      apellido: apelli,
      especialidad: espe,
      salario: sal,
    };

    axios.post(url, doctor).then((res) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <h1>Formulario Doctores</h1>
        <form
          onSubmit={this.insertarDoctor}
          className="col-4 p-5 my-5 rounded"
          style={{
            backgroundColor: "lightyellow",
            border: "3px solid darkorange",
          }}
        >
          <div className="form-group row mb-3">
            <label>ID Hospital: </label>
            <input
              type="number"
              className="form-control"
              ref={this.cajaIdHospital}
            />
          </div>
          <div className="form-group row mb-3">
            <label>ID Doctor: </label>
            <input
              type="number"
              className="form-control"
              ref={this.cajaIdDoctor}
            />
          </div>
          <div className="form-group row">
            <label>Apellido: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaApellido}
            />
          </div>
          <div className="form-group row mb-3">
            <label>Especialidad: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaEspecialidad}
            />
          </div>
          <div className="form-group row mb-3">
            <label>Salario: </label>
            <input
              type="number"
              className="form-control"
              ref={this.cajaSalario}
            />
          </div>
          <button className="btn btn-info">Insertar</button>{" "}
          <NavLink to="/mostrarDoctores" className="btn btn-info">Volver</NavLink>
        </form>
        {this.state.status == true && <Redirect to="/mostrarDoctores" />}
      </div>
    );
  }
}
