function Metodos(){

    var ejemplo = "Hola soy una variable";

    const mostrarMensaje = () =>{
        console.log("Has pulsado un botón.");
        ejemplo = "He cambiado la variable en un click.";
        console.log(ejemplo);
    }

    const dobleNumero = (numero) =>{
        var doble  = numero * 2;
        console.log(doble);
    }

    var estilofeo = {
        color : "white",
        backgroundColor : "fuchsia"
    }

    return (
        <div>
            {/* Llama al metodo nada mas arrancar */}
            {/* {mostrarMensaje()} */}
            <hr/>
            <h1 style={estilofeo}>Ejemplo de metodos en react</h1>
            <h1 style={{color:"red"}}>{ejemplo}</h1>
            <button onClick={ () => mostrarMensaje() }>Pulsa para mensaje</button>
            <hr/>
            <button onClick={ () => dobleNumero(7) }>Duplicar</button>
        </div>
    );  
}
export default Metodos;