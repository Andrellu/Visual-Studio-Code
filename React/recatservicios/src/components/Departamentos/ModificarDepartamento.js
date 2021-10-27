import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";

export default class ModificarDepartamento extends Component {
  id = this.props.idDepartamento;

  cajaNumero = React.createRef();
  cajaNombre = React.createRef();
  cajaLocal = React.createRef();

  state = {
    departamento: {},
    status: false,
  };

  modificarDepartamento = (e) => {
    e.preventDefault();
    var request = "/webresources/departamentos/put";
    var url = Global.urlCrudDepartamentos + request;
    console.log(url);

    var nombre = this.cajaNombre.current.value;
    var num = parseInt(this.cajaNumero.current.value);
    var locali = this.cajaLocal.current.value;

    var departamento = {
      numero: num,
      nombre: nombre,
      localidad: locali,
    };

    axios.put(url, departamento).then((res) => {
      this.setState({
        status: true,
      });
    });

    //axios.put(url).then((res) => {});
  };

  buscarDepartamento = () => {
    var request = "/webresources/departamentos/" + this.id;
    var url = Global.urlCrudDepartamentos + request;
    console.log(url);
    axios.get(url).then((res) => {
      this.setState({
        departamento: res.data,
      });
    });
  };

  componentDidMount = () => {
    this.buscarDepartamento();
  };

  render() {
    return (
      <div>
        <h1>Modificar</h1>
        <form onSubmit={this.modificarDepartamento}>
          <label>ID: </label>
          <input
            type="number"
            ref={this.cajaNumero}
            defaultValue={this.state.departamento.numero}
            disabled
          />{" "}
          <br /> <br />
          <label>Nombre: </label>
          <input
            type="text"
            ref={this.cajaNombre}
            defaultValue={this.state.departamento.nombre}
          />{" "}
          <br /> <br />
          <label>Localidad: </label>
          <input
            type="text"
            ref={this.cajaLocal}
            defaultValue={this.state.departamento.localidad}
          />
          <br />
          <br />
          <button className="btn btn-info">Modificar Datos</button>{" "}
          <NavLink className="btn btn-info" to="/departamentos">
            Volver
          </NavLink>
        </form>
        {this.state.status == true && <Redirect to="/departamentos" />}
      </div>
    );
  }
}
