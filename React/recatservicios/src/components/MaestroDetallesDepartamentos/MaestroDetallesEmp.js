import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class MaestroDetallesEmp extends Component {
    
    state = {
        empleados : [],
        copia : []
    };

    cargarEmpleados = () =>{
        var idDepartamento = this.props.idDepartamento;
        var request = "/api/Empleados/EmpleadosDepartamento/" + idDepartamento;
        var url = Global.urlempleados + request;
        //console.log("Estoy aqui");
        axios.get(url).then(res =>{
            //console.log("Estoy aqui");
            this.setState({
                empleados : res.data,
                copia : res.data
            });
            //console.log("Estoy aqui");
        });
    };

    componentDidMount = () =>{
        this.cargarEmpleados();
    }

    componentDidUpdate = (e) =>{
        if(this.props.idDepartamento !== e.idDepartamento){
            this.cargarEmpleados();
            console.log("Estoy aqui");
        }
    }

    render() {
        return (
            <div>
               <h1>Empleados del departamento {this.props.idDepartamento}</h1> 
               {this.state.empleados.length > 0 && (
                   this.state.empleados.map((emple, index) =>{
                       //console.log("Estoy aqui");
                        return (<h3 key={index} style={{color:"red"}}>{emple.apellido}, {emple.oficio}</h3>);
                   })
               )}
            </div>
        )
    }
}
