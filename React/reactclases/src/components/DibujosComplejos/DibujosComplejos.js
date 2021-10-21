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

    state = {
        nombres : ["Andres", "Sara", "Alex", "Javi", "Santi"]
    };

    insertarNombre = () =>{
        // Necesitamos cambiar el state
        // Debemos comprobar si basta con acceder a state y utilizar push para hecer los cambios
        this.state.nombres.push("NUEVO");
        // Debemos reasignarlo para que lo haga.
        this.setState({
            nombres : this.state.nombres
        });
    }

    render (){
        return (
            <div> 
                <h1 className="App">Dibujos con bucles</h1>
                <button onClick={() => this.insertarNombre()}>Añadir nombre</button>
                {/* Primera forma de pintar dibujos con bucles */}
                {/* <ul> {this.dibujarNumeros()} </ul> */}
                {/* Segunda forma de pintar dibujos con bucles */}
                <ul>
                    {/* ES COMO REALIZAR UN EACH CON LOS DATOS DE LA LISTA CON UN NOMBRE
                    Y UN INDICE DADO POR NOSOTROS */}
                    {this.state.nombres.map((name, index) => {
                        return (
                            <li key={index}>{name}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
export default DibujosComplejos;