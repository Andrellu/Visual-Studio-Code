import React, { Component } from 'react'

export default class EjercicioUno extends Component {
    
    nombreCaja = React.createRef();
    apellidoCaja = React.createRef();
    dniCaja = React.createRef();

    state = {
        empleados : []
    };

    guardarEmpleado = (e) => {
        e.preventDefault();
        var nombre = this.nombreCaja.current.value;
        var apellido = this.apellidoCaja.current.value;
        var dni = this.dniCaja.current.value;
        //console.log(nombre);
        //console.log(apellido);
        //console.log(dni);
        var datos = [];
        datos.push(<li>{"Nombre : " + nombre}</li> + 
                    <li>{"Apellido: " + apellido}</li> + 
                    <li>{"DNI: " + dni}</li>);
        this.state.empleados.push(datos);
        this.setState({
            empleados : datos
        });
    }

    
    render() {
        return (
            <div>
                <h1>Soy donde dibujo</h1>
                <form onSubmit={this.guardarEmpleado}>
                    <label>Nombre </label>
                    <input type="text" ref={this.nombreCaja}/> <br/>
                    <label>Apellido </label>
                    <input type="text" ref={this.apellidoCaja}/> <br/>
                    <label>DNI </label>
                    <input type="text" ref={this.dniCaja}/> <br/><br/>
                    <button>Guardar empleado</button>
                </form>
                <ul>
                    {this.guardarEmpleado}
                </ul>
            </div>
        )
    }
}
