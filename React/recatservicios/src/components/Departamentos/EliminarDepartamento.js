import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import { Redirect } from "react-router";

export default class EliminarDepartamento extends Component {
  cajaNumero = React.createRef();

  state = {
    status: false,
  };

  eliminarDepartamento = (e) => {
    e.preventDefault();
    var numDep = this.cajaNumero.current.value;
    var request = "/webresources/departamentos/delete/" + numDep;
    var url = Global.urlCrudDepartamentos + request;

    axios.delete(url).then((res) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>
          ¿Desea eliminar el departamento {this.props.nombre} en{" "}
          {this.props.localidad}?
        </h1>
        <form onSubmit={this.eliminarDepartamento}>
          <input
            type="hidden"
            value={this.props.idDepartamento}
            ref={this.cajaNumero}
          />
          <button className="btn btn-danger">Eliminar Departamento</button>
        </form>
        {this.state.status == true && <Redirect to="/departamentos" />}
      </div>
    );
  }
}
