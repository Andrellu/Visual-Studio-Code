import { Component } from "react";

function miFuncion() {
    console.log("Soy una funcion fuera de la clase.");
}
// A NIVEL DE CLASE SOLO PODEMOS DECLARAR VARIABLES 
// ELEMENTOS Y QUE NI SE REPITAN
class Contador extends Component {
    // PARA DECLARAR VARIABLES O METODOS NO SE UTILIZA NI
    // VAR NI CONST NI NADA
        //Creo una variable
        contador = 1;
        //Creo un método
        incrementarContador = () => {
            // Es necesario referenciar a las variables de la clase
            // con THIS
            console.log("Conatdor : " + this.contador);
            this.contador++;
        }

        // Podemos usar variables de estado
        // Y modificarlas cuando deseemos
        // SI DESEAMOS CREAR UNA VARIABLE DE ESTADO
        // DESDE EL INICIO SE UTILIZA STATE DE LA CLASE
        // PRIMERO DECLARAMOS LAS VARIABLES Y LUEGO
        // PODEMOS MODIFICARLAS CON EL  METODO setState
        // state = {}
        state = {"valor" : parseInt(this.props.Inicio)};

        incrementarValor = () =>{
            // CAMBIAMOS EL ESTADO Y LA
            // VARIABLE VALOR
            this.setState( {
                valor : this.state.valor + 1
            });
        } 

        decrementarValor = () =>{
            this.setState({
                valor : this.state.valor - 1
            });
        }


    // Dentro del render si puedo usar var y const
    // Fuera no podriamos.
    render() {
        // ESTE CODIGO SIEMPRE ACTUALIZA AL INICIO
        //Y AL CAMBIAR CUALQUIER STATE. ES IGUAL A UTILIZAR function
        var valor =  0;
        const miMetodoRender = () => {
            valor += 1;
            console.log("Soy el método render :" + valor);
        }
        return (
            <div className="App">
                <h1>Primer componente JSX</h1>
                <h2 style={{color:"blue"}}>Inicio {this.props.Inicio}</h2 >
                <h2 style={{color:"red"}}>Variable estado {this.state.valor}</h2 >
                {/* <button onClick={() => {miMetodoRender();
                                                         miFuncion();}}>Pulsa para incrementar</button> */}
                <button onClick={() => this.incrementarContador()}>Pulsa para incrementar</button> 
                {/* Dos formas de hacer un onclick */}
                <button onClick={this.incrementarValor}>Incrementar Valor</button>
                <button onClick={() => {
                    this.decrementarValor();}}>Decrementar Valor</button>
            </div>
        );
    }
}
export default Contador;