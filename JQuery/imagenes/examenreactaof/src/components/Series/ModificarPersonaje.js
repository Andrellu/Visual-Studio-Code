import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import { Redirect } from "react-router";

export default class ModificarPersonaje extends Component {
  cajaSelectPersonajes = React.createRef();
  cajaSelectSeries = React.createRef();

  state = {
    personajes: [],
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

  cargarPersonajes = () => {
    var request = "api/Personajes";
    var url = Global.urlSeries + request;
    console.log(url);
    axios.get(url).then((res) => {
      this.setState({
        personajes: res.data,
      });
    });
  };

  modificarPersonaje = () => {
    var idSerie = this.cajaSelectSeries.current.value;
    var idPj = this.cajaSelectPersonajes.current.value;
    var request = "api/Personajes/" + idPj + "/" + idSerie;
    var url = Global.urlSeries + request;
    console.log(url);
    axios.put(url).then((res) => {
      this.setState({
        status: true,
      });
    });
  };

  prevenirEvento = (e) => {
    e.preventDefault();
  };

  componentDidMount = () => {
    this.cargarPersonajes();
    this.cargarSeries();
  };

  render() {
    return (
      <div className="row justify-content-center">
        <br />
        <h1>Formulario Modifiar Personaje</h1>
        <form
          onSubmit={this.prevenirEvento}
          className="col-4 p-5 my-5 rounded"
          style={{
            backgroundColor: "lightyellow",
            border: "3px solid darkorange",
          }}
        >
          <div className="form-group row mb-3">
            <label>Personajes: </label>
            <select ref={this.cajaSelectPersonajes}>
              {this.state.personajes.map((serie, index) => {
                return <option key={index}>{serie.idPersonaje}</option>;
              })}
            </select>
          </div>
          <div className="form-group row mb-3">
            <label>Series: </label>
            <select ref={this.cajaSelectSeries}>
              {this.state.series.map((serie, index) => {
                return <option key={index}>{serie.idSerie}</option>;
              })}
            </select>
          </div>
          <br />
          <button
            className="btn btn-info"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Modificar Personaje
          </button>{" "}
          <NavLink to="/Home" className="btn btn-info">
            Volver
          </NavLink>
        </form>
        {this.state.status == true && (
          <Redirect to={"/personajes/" + this.cajaSelectSeries.current.value} />
        )}
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

              <div className="modal-body">¿Desea modificar este personaje?</div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={this.modificarPersonaje}
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
