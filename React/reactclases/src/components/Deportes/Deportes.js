import { Component } from "react";
import Deporte from "./Deporte";

// Clase Padre
class Deportes extends Component{
    // AQUI TENDREMOS TODOS LOS DEPORTES
    // Y SERA ESTATICO
    
    state = {
        selelccionado : "",
        deportes : ["Padel", "Tenis", "Futbol", "Baloncesto", "Pin-Pon", "Volleyball"]
    }
    
    mostrarFovorito = (deporteFavorito) =>{
        console.log(deporteFavorito);
        this.setState({
            selelccionado : deporteFavorito
        });
    };

    insertarDeporte = () =>{
        this.state.deportes.push("MOBA");
        this.setState({
            deportes : this.state.deportes
        });
    }

    render() {
        return (
            <div>
                <h2>Su deporte favorito es: 
                    <span style={{color:"red"}}>
                        {this.state.selelccionado}
                    </span>
                </h2>
                <ul>
                    {this.state.deportes.map((depor, index) => {
                        return (<Deporte nombre={depor} key={index} metodoPadre={this.mostrarFovorito}/>);
                    })}
                </ul>
                <button onClick={ () => {this.insertarDeporte()}}>Nuevo deporte</button>
            </div>
        );
    }
}
export default Deportes;