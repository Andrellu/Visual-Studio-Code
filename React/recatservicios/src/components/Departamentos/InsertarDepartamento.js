import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import { Redirect } from "react-router";

export default class InsertarDepartamento extends Component {
  cajaNumero = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    mensaje: "Insertado correctamente.",
    status: false,
  };

  insertarDepartamento = (e) => {
    e.preventDefault();

    var num = parseInt(this.cajaNumero.current.value);
    var nom = this.cajaNombre.current.value;
    var locali = this.cajaLocalidad.current.value;

    var departamento = {
      numero: num,
      nombre: nom,
      localidad: locali,
    };

    var request = "/webresources/departamentos/post";
    var url = Global.urlCrudDepartamentos + request;
    axios.post(url, departamento).then((res) => {
      this.setState({
        mensaje: "Departamento insertado",
        status: true,
      });
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <form
          onSubmit={this.insertarDepartamento}
          className="col-4 p-5 my-5 rounded"
          style={{
            backgroundColor: "lightyellow",
            border: "3px solid darkorange",
          }}
        >
          <div className="form-group row mb-3">
            <label>Numero: </label>
            <input
              type="number"
              className="form-control"
              ref={this.cajaNumero}
            />
          </div>
          <div className="form-group row">
            <label>Nombre: </label>
            <input type="text" className="form-control" ref={this.cajaNombre} />
          </div>
          <div className="form-group row mb-3">
            <label>Localidad: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaLocalidad}
            />
          </div>
          <button className="btn btn-info">Insertar</button>
        </form>
        {this.state.status == true && <Redirect to="/departamentos" />}
      </div>
    );
  }
}
