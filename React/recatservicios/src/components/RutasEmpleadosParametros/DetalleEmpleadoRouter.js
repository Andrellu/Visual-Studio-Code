import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';

export default class DetalleEmpleadoRouter extends Component {
    
    constructor(props){
        super(props);
        console.log("Id Empleado : " + this.props.idempleado);
    }

    state = {
        empleado : {},
        status : false
    };

    buscarEmpleado = () =>{
        var request = "/api/empleados/" + this.props.idempleado;
        var url = Global.urlempleados + request;
        axios.get(url).then(res =>{
            this.setState({
                empleado : res.data,
                status : true
            });
        });
    }

    componentDidMount = () =>{
        this.buscarEmpleado();
    }
    
    render() {
        return (
            <div>
                <h1>Detalle Empleado</h1>
                {this.state.status == true && (
                    <div>
                        <h2  style={{color:"red"}}>{this.state.empleado.apellido}</h2>
                        <h2  style={{color:"orange"}}>{this.state.empleado.oficio}</h2>
                        <h2  style={{color:"blue"}}>{this.state.empleado.salario}</h2>
                    </div>
                )}
            </div>
        )
    }
}
