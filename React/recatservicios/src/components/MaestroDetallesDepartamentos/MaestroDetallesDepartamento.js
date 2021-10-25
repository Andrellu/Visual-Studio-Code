import React, { Component } from 'react';
import Global from '../../Global';
import axios from 'axios';

export default class MaestroDetallesDepartamento extends Component {
    
    selectDepartamento = React.createRef();

    state = {
        empleados : [],
        departamentos : [],
        status : false
    }
    
    buscarEmpleados = (e) =>{
        e.preventDefault();
        var depNumero = this.selectDepartamento.current.value;
        var request = "/api/Empleados/EmpleadosDepartamento/" + depNumero;
        var url = Global.urlempleados + request;
        axios.get(url).then(res => {
            this.setState({
                empleados : res.data
            });
        });
    };
    
    cargarDepartamentos = () =>{
        //var request = "/api/departamentos";
        var url = Global.urldepartamento;
        console.log("Estoy aqui 1");
        axios.get(url).then(res => {
            console.log("Estoy aqui 2");
            console.log(res.data);
            this.setState({
                departamentos : res.data,
                status : true
            });
            console.log("Estoy aqui 3");
            console.log(this.state.departamentos);
        });
    };

     componentDidMount = () =>{
         this.cargarDepartamentos();
     };
    
    render() {
        return (
            <div>
                <h1>Maestro detalle departamentos empleados</h1>
                <form>
                    <select ref={this.selectDepartamento}>
                        {this.state.status == true && (
                            this.state.departamentos.map((dept, index) => {
                                return (<option key={index} value={dept.Numero}>{dept.Nombre}</option>);
                            })
                        )}
                    </select>
                    <button onClick={this.buscarEmpleados}>Mostrar empleados</button>
                </form>
                <hr/>
                {this.state.empleados.length > 0 && (
                    <ul>
                        {this.state.empleados.map((emple, index) => {
                            return(<li key={index}>{emple.apellido}</li>);
                        })}
                    </ul>
                )}
            </div>
        )
    }
}
