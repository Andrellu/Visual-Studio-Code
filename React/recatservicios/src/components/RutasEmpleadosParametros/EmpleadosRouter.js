import React, { Component } from 'react';
import axios from "axios";
import Global from "../../Global";

export default class EmpleadosRouter extends Component {
    
    state = {
        empleados : [],
        status : false
    };

    cargarEmpelados = () =>{
        var request = "/api/empleados";
        var url = Global.urlempleados + request;
        axios.get(url).then(res =>{
            this.setState({
                empleados : res.data,
                status : true
            });
        });
    };

    componentDidMount = () =>{
        this.cargarEmpelados();
    }
    
    render() {
        return (
            <div>
                <h1>Empleados Router</h1>
                <ul>
                    {this.state.status == true &&(
                        this.state.empleados.map((emple, index) =>{
                            return(<li key={index}>{emple.apellido}<a href={"/detalleEmpleado/" + emple.idEmpleado}>Detalles</a></li>);
                        })
                    )}
                </ul>
            </div>
        )
    }
}
