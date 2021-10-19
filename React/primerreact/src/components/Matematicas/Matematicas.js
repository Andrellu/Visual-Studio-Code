function Matematicas(props){
    
    // Me recoge los valores del padre y el nombre de la funcion.
    const {Valor, metodoPadreMates} = props;

    const duplicarNumero = (Numero) =>{
        var doble = Numero * 2;
        console.log("El doble es " + doble);
    }
    return (
        <div className="App">
            <h1>Soy el numero {Valor}</h1>
            <button onClick={() => metodoPadreMates(Valor)}>Triplicar</button>
            <button onClick={() => duplicarNumero(Valor) }>Duplicar</button>
        </div>
    );
}
export default Matematicas;