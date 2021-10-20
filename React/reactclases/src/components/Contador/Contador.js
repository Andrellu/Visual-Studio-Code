import { Component } from "react";

class Contador extends Component {

    render() {
        // ESTE CODIGO SIEMPRE ACTUALIZA AL INICIO
        //Y AL CAMBIAR CUALQUIER STATE. ES IGUAL A UTILIZAR function

        var valor =  0;
        const miMetodoRender = () => {
            valor += 1;
            console.log("Soy el método render :" + valor);
        }
        return (
            <div>
                <h1>Primer componente JSX</h1>
                <button onClick={() => miMetodoRender()}>Pulsa para incrementar</button>
            </div>
        );
    }
}
export default Contador;