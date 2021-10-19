function Saludo(props){
    var dato = "Y mañana es martes...";
    //var nombre = props.nombre;
    //var edad = props.edad;
    const {Nombre, Edad, metodoPadre} = props;
    //var metodo = props.metodoPadre;

    return (
        <div className="App">
            <h1> Hoy es lunes de REACT , {Nombre} , con edad {Edad}!!!</h1>
            <h2>{dato}</h2>
            <button onClick={() => metodoPadre("Soy " + Nombre + " " + Edad)}>
                Llamar al padre
            </button>
        </div> 
    );
}
export default Saludo;
 
