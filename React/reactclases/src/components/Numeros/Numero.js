import { Component } from "react";

class Numero extends Component{

    sumarAleatorio = () =>{
        var num = this.props.numero;
        this.props.metodoPadre(num);
    };

    render(){
        return(
            <div>
                <h1>{this.props.numero}</h1>
                <button onClick={this.sumarAleatorio}>Sumar</button>
            </div>
        );
    }
}
export default Numero;