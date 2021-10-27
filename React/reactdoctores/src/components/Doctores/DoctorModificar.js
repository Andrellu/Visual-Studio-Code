import axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

export default class DoctorModificar extends Component {
  
  cajaIdHospital = React.createRef();
  cajaIdDoctor = React.createRef();
  cajaApellido = React.createRef();
  cajaEspecialidad = React.createRef();
  cajaSalario = React.createRef();

  state = {
    doctor : {},
    status : false
  };

  modificarDoctor = (e) =>{
    e.preventDefault();
    var idDoctor = parseInt(this.cajaIdDoctor.current.value);
    var idHospital = parseInt(this.cajaIdHospital.current.value);
    var apellido = this.cajaApellido.current.value;
    var espe = this.cajaEspecialidad.current.value;
    var sal = parseInt(this.cajaSalario.current.value);

    var doctor = {
      idDoctor: idDoctor,
      idHospital: idHospital,
      apellido: apellido,
      especialidad: espe,
      salario: sal
    };

    var request = "/api/Doctores";
    var url = Global.urlDoctores + request;

    axios.put(url, doctor).then(res => {
      this.setState({
        status : true
      });
    });
  };

  buscarDoctor = () =>{
    var request = "/api/Doctores/" + this.props.idDoctor;
    var url = Global.urlDoctores + request;
    console.log(url);
    axios.get(url).then(res => {
      this.setState({
        doctor : res.data
      });
    });
  };

  componentDidMount = () =>{
    this.buscarDoctor();
  };
  
  
  render() {
    return (
      <div className="row justify-content-center">
        <h1>Formulario Doctor</h1>
        <form
          onSubmit={this.modificarDoctor}
          className="col-4 p-5 my-5 rounded"
          style={{
            backgroundColor: "lightyellow",
            border: "3px solid darkorange",
          }}
        >
          <div className="form-group row mb-3">
            <label>idHospital: </label>
            <input
              type="number"
              className="form-control"
              ref={this.cajaIdHospital}
              defaultValue={this.state.doctor.idHospital}
              disabled
            />
          </div>
          <div className="form-group row mb-3">
            <label>Id Doctor: </label>
            <input
              type="number"
              className="form-control"
              ref={this.cajaIdDoctor}
              defaultValue={this.state.doctor.idDoctor}
              disabled
            />
          </div>
          <div className="form-group row mb-3">
            <label>Apellido: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaApellido}
              defaultValue={this.state.doctor.apellido}
            />
          </div>
          <div className="form-group row">
            <label>Especialidad: </label>
            <input type="text" className="form-control" ref={this.cajaEspecialidad} defaultValue={this.state.doctor.especialidad}/>
          </div>
          <div className="form-group row mb-3">
            <label>Salario: </label>
            <input
              type="number"
              className="form-control"
              ref={this.cajaSalario}
              defaultValue={this.state.doctor.salario}
            />
          </div>
          <button className="btn btn-info">Modificar</button>{" "}
          <NavLink to="/mostrarDoctores" className="btn btn-info">Volver</NavLink>
        </form>
        {this.state.status == true && <Redirect to="/mostrarDoctores" />}
      </div>
    );
  }
}
