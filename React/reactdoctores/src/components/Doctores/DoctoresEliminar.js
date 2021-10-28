import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../../Global";
import { Redirect } from "react-router";

export default class DoctoresEliminar extends Component {
  
  cajaIdEmpleado = React.createRef();

  state = {
    status : false
  };

  prevenirEvento = (e) =>{
    e.preventDefault();
  }

  eliminarDoctor = () =>{
    var id = this.cajaIdEmpleado.current.value;
    var request = "/api/Doctores/" + id;
    var url = Global.urlDoctores + request;
    axios.delete(url).then(res => {
      this.setState({
        status : true
      });
    });
  };
  
  render() {
    return (
      <div>
        <h1>Eliminar Empleado : {this.props.apellido}</h1>
        <form onSubmit={this.prevenirEvento}>
          <input type="number" ref={this.cajaIdEmpleado} disabled defaultValue={this.props.idDoctor} type="hidden"/>
          <button className="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#myModal">Eliminar</button>{" "}
          <NavLink to="/mostrarDoctores" className="btn btn-primary">Volver</NavLink>
        </form>
        {this.state.status == true && <Redirect to="/mostrarDoctores" />}

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">ELIMINAR</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body">¿Desea Elimnar a {this.props.apellido}?</div>

              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={this.eliminarDoctor}>Aceptar</button>{" "}
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
