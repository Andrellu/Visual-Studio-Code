import React, { Component } from 'react';
import Global from '../../Global';
import axios from 'axios';
import MaestroDetallesEmp from './MaestroDetallesEmp';

export default class MaestroDetallesDep extends Component {
    
    selectDepartamento = React.createRef();

    state = {
        departamentos : [],
        status : false,
        idDepartamento : 0
    }
    
    buscarEmpleados = (e) =>{
        e.preventDefault();
        var numDep = this.selectDepartamento.current.value;
        this.setState({
            idDepartamento : numDep
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
                <h1>Maestro detalle departamentos</h1>
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
                {
                    this.state.idDepartamento != 0 && (
                        <MaestroDetallesEmp idDepartamento={this.state.idDepartamento}/> 
                    )
                }
            </div>
        )
    }
}
