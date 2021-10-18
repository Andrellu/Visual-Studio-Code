function Saludo(props){
    var dato = "Y mañana es martes...";
    //var nombre = props.nombre;
    //var edad = props.edad;
    const {nombre, edad} = props;
    return (
        <div className="App">
            <h1> Hoy es lunes de REACT , {nombre} , con edad {edad}!!!</h1>
            <h2>{dato}</h2>
        </div> 
    );
}
export default Saludo;
 
