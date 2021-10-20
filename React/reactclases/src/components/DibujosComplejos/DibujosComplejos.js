import { Component } from "react";

class DibujosComplejos extends Component{

    dibujarNumeros = () =>{
        // SI TENEMOS UN BUCLE VAMOS A VISUALIZAR EL DIBUJO
        // NOS OFRECE COMO RESULTADO. HAY QUE ALMACENAR DENTRO DE 
        // UN LIST TODO EL CONTENIDO HTML
        // UNA LISTA SE DECLARA COMO UN ARRAY list = []
        // TIENE UN METOD PUSH PARA AÑADIR ELEMENTOS A LA 
        // LISTA
        var lista = [];
        for(var i = 1; i <=5; i++){
            lista.push(<li>Numero {i}</li>);
        }
        return lista;
    }

    render (){
        return (
            <div> 
                <h1 className="App">Dibujos con bucles</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        );
    }
}
export default DibujosComplejos;