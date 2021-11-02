import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";
import Global from "../Global";
import axios from "axios";

export default class InsertarPersonaje extends Component {
  cajaSelect = React.createRef();
  cajaNombre = React.createRef();
  cajaImg = React.createRef();

  state = {
    series: [],
    status: false,
  };

  prevenirEvento = (e) => {
    e.preventDefault();
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

  insertarPersonaje = () => {
    var request = "api/Personajes";
    var url = Global.urlSeries + request;
    console.log(url);

    var nom = this.cajaNombre.current.value;
    var img = this.cajaImg.current.value;
    var seri = parseInt(this.cajaSelect.current.value);

    var personajeSerie = {
      idPersonaje: 0,
      nombre: nom,
      imagen: img,
      idSerie: seri,
    };

    axios.post(url, personajeSerie).then((res) => {
      this.setState({
        status: true,
      });
    });
  };

  componentDidMount = () => {
    //var valor = this.cajaSelect.current.value;
    //console.log(valor);
    this.cargarSeries();
  };

  render() {
    return (
      <div className="row justify-content-center">
        <h1>Formulario Insertar Personaje</h1>
        <form
          onSubmit={this.prevenirEvento}
          className="col-4 p-5 my-5 rounded"
          style={{
            backgroundColor: "lightyellow",
            border: "3px solid darkorange",
          }}
        >
          <div className="form-group row mb-3">
            <label>Nombre: </label>
            <input type="text" className="form-control" ref={this.cajaNombre} />
          </div>
          <div className="form-group row mb-3">
            <label>Imagen: </label>
            <input type="text" className="form-control" ref={this.cajaImg} />
          </div>
          <div className="form-group row mb-3">
            <label>Series: </label>
            <select ref={this.cajaSelect}>
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
            InsertarPersonaje
          </button>{" "}
          <NavLink to="/Home" className="btn btn-info">
            Volver
          </NavLink>
        </form>
        {this.state.status == true && <Redirect to="/Home" />}
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

              <div className="modal-body">¿Desea añadir este personaje?</div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={this.insertarPersonaje}
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
