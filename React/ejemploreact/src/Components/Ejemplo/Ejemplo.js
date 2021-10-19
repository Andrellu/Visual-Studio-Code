import foto from './../../assets/images/ImagenDos.jpg';
function Ejemplo(){
    var numUno = 1;
    var numDos = 2;

    const sumar = () =>{
        var suma = numUno + numDos;
        console.log(suma);
    }

    return (
        <div>
            <h1> {numUno} + {numDos} </h1>
            <button onClick={() => sumar()}>Sumar</button>
            <img src={foto}></img>
        </div>
    );
}
export default Ejemplo;