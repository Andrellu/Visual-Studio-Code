function Matematicas(props){
    
    // Me recoge los valores del padre y el nombre de la funcion.
    const {Valor, metodoPadreMates} = props;

    const duplicarNumero = (Numero) =>{
        var doble = Numero * 2;
        console.log("El doble es " + doble);
    }
    return (
        <div className="App">
            <h1>Soy el numero {Valor} en matematicas</h1>
            <button onClick={() => metodoPadreMates(Valor)}>Triplicar con el Padre</button>
            <button onClick={() => duplicarNumero(Valor) }>Duplicar con el Hijo</button>
        </div>
    );
}
export default Matematicas;