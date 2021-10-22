import React, { Component } from 'react'

export default class EjemploSimple extends Component {
    // CREAMOS LAS VARIABLES DE REFERENCIA
    // ESTAS VARIABLES APUNTAN AL OBJETO
    // NO TIENEN EL VALOR DE LA CAJA
    cajanombre = React.createRef();
    cajaedad = React.createRef();

    state = {
        user : null
    };

    recibirDatos = (e) =>{
        // CORTAMOS EL EVENTO QUE ENVIA LOS DATOS
        e.preventDefault();
        // PARA RECUPERAR EL VALUE DE HACE ASI:
        //console.log(this.cajanombre.current.value);
        //console.log(this.cajanombre.current.nombre);
        this.setState({
            user : {
                nombre : this.cajanombre.current.value,
                edad : this.cajaedad.current.value
            }
        });
    };

    render() {
        
        return (
            <div>
                <h1>Formulario : </h1>

                {this.state.user && (
                    <div>
                        <h2 style={{color:"red"}}>Usuario : {this.state.user.nombre}</h2>
                        <h2 style={{color:"blue"}}>Edad : {this.state.user.edad}</h2>
                    </div>
                )}

                <form onSubmit={this.recibirDatos}>
                    <label>Nombre : </label>
                    <input type="text" ref={this.cajanombre}/> <br/>
                    <label>Edad : </label>
                    <input type="number" ref={this.cajaedad}/> <br/>
                    <button>Enviar datos</button>
                </form> 

            </div>
        );
    }
}
