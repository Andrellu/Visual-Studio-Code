import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';

export default class InsertarHospital extends Component {
    
    cajaID =React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    state = {
        mensaje : "",
        status : false
    };
    
    InsertarHospital = (e) =>{
        e.preventDefault();

        var id = parseInt(this.cajaID.current.value);
        var nombre = this.cajaNombre.current.value;
        var direcc = this.cajaDireccion.current.value;
        var tlf = this.cajaTelefono.current.value;
        var camas = parseInt(this.cajaCamas.current.value);

        var hospital = {
            idhospital : id,
            nombre: nombre,
            direccion: direcc,
            telefono: tlf,
            camas: camas
        }

        var request = "/webresources/hospitales/post";
        var url = Global.urlHospital + request;
        axios.post(url, hospital).then(res => {
            this.setState({
                mensaje : "Hospital Almacenado",
                status : true
            });
        });
    };
    
    render() {
        return (
            <div>
                <h1>Insertar Hospital</h1>
                <form onSubmit={this.InsertarHospital}>
                    <div className="form-group row">
                        <label>ID: </label>
                        <input
                        type="number"
                        className="form-control"
                        ref={this.cajaID}
                        />
                    </div>
                    <div className="form-group row">
                        <label>Nombre: </label>
                        <input
                        type="text"
                        className="form-control"
                        ref={this.cajaNombre}
                        />
                    </div>
                    <div className="form-group row">
                        <label>Dirección: </label>
                        <input 
                        type="text" 
                        className="form-control" 
                        ref={this.cajaDireccion}
                        />
                    </div>
                    <div className="form-group row">
                        <label>Teléfono: </label>
                        <input
                        type="text"
                        className="form-control"
                        ref={this.cajaTelefono}
                        />
                    </div>
                    <div className="form-group row">
                        <label>Número de Camas: </label>
                        <input
                        type="number"
                        className="form-control"
                        ref={this.cajaCamas}
                        />
                    </div>
                    <button className="btn btn-info">Insertar</button>
                </form>
                {this.state.status == true && (
                    <h2 style={{color :"red"}}>{this.state.mensaje}</h2>
                )}
            </div>
        )
    }
}
