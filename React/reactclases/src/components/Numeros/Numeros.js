import { Component } from "react";
import Numero from "./Numero";

class Numeros extends Component{
    
    state = ({
        numeros : [4, 5],
        total : 0
    });
    
    generarNumero = () =>{
        var numRandor = parseInt(Math.random() * 100);
        this.state.numeros.push(numRandor);
        //console.log(numRandor);
        this.setState ({
            numeros : this.state.numeros
        });
    };

    sumarNumeros = (num) => {
        this.setState({
            total : this.state.total + num
        });
    }

    restarNumeros = (num) =>{
        this.setState({
            total : this.state.total - num
        });
    }

    render(){
        

        return (
            <div>
                <h1 style={{color:"red"}}>La suma es : {this.state.total} </h1>
                <button onClick={() => this.generarNumero()}>Generar Numero</button>
                <div>
                    {this.state.numeros.map((num, index) => {
                        return (<Numero numero={num} key={index} metodoPadre={this.sumarNumeros} metodoPadreDos={this.restarNumeros}/>);
                    })}
                </div>
            </div>
        );
    }
}
export default Numeros;