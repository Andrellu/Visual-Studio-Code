import React, { Component } from "react";

class Deporte extends Component{

    // Necesitamos un metodo para llamar al del padre
    seleccionarFavorito  = () =>{
        var deporteSeleccionado = this.props.nombre;
        this.props.metodoPadre(deporteSeleccionado);
    }

        render(){
            return (
                <React.Fragment>
                    <li style={{color:"Blue"}}>
                        {this.props.nombre}
                        <button onClick={this.seleccionarFavorito}>Favorito</button>
                    </li>
                </React.Fragment>
            );
        }
}
export default Deporte;