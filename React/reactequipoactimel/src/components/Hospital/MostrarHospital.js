import React, { Component } from 'react';
import axios from "axios";
import Global from "../../Global";

export default class MostrarHospital extends Component {
    
    state = {
        hospitales : [],
        status : false
    };

    cargarHospital = () =>{
        var request = "/webresources/hospitales";
        var url = Global.urlHospital + request;
        axios.get(url).then(res => {
            this.setState({
                hospitales : res.data,
                status : true
            });
        });
    };

    componentDidMount = () =>{
        this.cargarHospital();
    }

    render() {
        return (
            <div>
                <h1>Tabla Hospital</h1><br/><br/>
                <table className="table table-striped"> 
                    <thead>
                        <tr className="table-dark">
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Camas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.hospitales.map((hospi, index) => {
                            return (
                                <tr className="table-secondary" key={index}>
                                    <td>{hospi.nombre}</td>
                                    <td>{hospi.direccion}</td>
                                    <td>{hospi.telefono}</td>
                                    <td>{hospi.camas}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
