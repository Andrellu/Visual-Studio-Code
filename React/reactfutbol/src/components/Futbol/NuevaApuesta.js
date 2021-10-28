import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";
import Global from "../Global";
import axios from "axios";

export default class NuevaApuesta extends Component {
  cajaUsuario = React.createRef();
  cajaResultado = React.createRef();
  cajaFecha = React.createRef();

  state = {
    status: false,
  };

  prevenirEvento = (e) => {
    e.preventDefault();
  };

  nuevaApuesta = (e) => {
    var usua = this.cajaUsuario.current.value;
    var result = this.cajaResultado.current.value;
    var fech = this.cajaFecha.current.value;

    var apuesta = {
      idApuesta: "19",
      usuario: usua,
      resultado: result,
      fecha: fech,
    };

    var request = "api/Apuestas";
    var url = Global.urlChampions + request;
    axios.post(url, apuesta).then((res) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <h1>Formulario Apuesta</h1>
        <form
          onSubmit={this.prevenirEvento}
          className="col-4 p-5 my-5 rounded"
          style={{
            backgroundColor: "lightyellow",
            border: "3px solid darkorange",
          }}
        >
          <div className="form-group row mb-3">
            <label>Usuario: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaUsuario}
            />
          </div>
          <div className="form-group row mb-3">
            <label>Resultado: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaResultado}
            />
          </div>
          <div className="form-group row">
            <label>Fecha: </label>
            <input type="text" className="form-control" ref={this.cajaFecha} />
          </div>{" "}
          <br />
          <button
            className="btn btn-info"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Realiza Apuesta
          </button>{" "}
          <NavLink to="/mostrarApuestas" className="btn btn-info">
            Volver
          </NavLink>
        </form>
        {this.state.status == true && <Redirect to="/mostrarApuestas" />}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">APUESTA</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">¿Desea realizar esta apuesta?</div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={this.nuevaApuesta}
                >
                  Aceptar
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
