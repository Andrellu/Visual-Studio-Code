import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";

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
      <div>
        <form onSubmit={this.insertarDepartamento}>
          <div className="form-group row">
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
          <div className="form-group row">
            <label>Localidad: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaLocalidad}
            />
          </div>
          <button className="btn btn-info">Insertar</button>
        </form>
        {this.state.status == true && (
          <h2 style={{ color: "red" }}>{this.state.mensaje}</h2>
        )}
      </div>
    );
  }
}
