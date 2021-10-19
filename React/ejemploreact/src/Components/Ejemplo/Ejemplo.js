import foto from './../../assets/images/ImagenDos.jpg';
function Ejemplo(){

    const sumar = (numero1, numero2) =>{
        var suma = numero1 + numero2;
        console.log("La suma es :" + suma);
    }
    var imgSize = {
        width: "150px",
        height: "150px"
    };

    return (
        <div>
            <h1> 1 + 2 </h1>
            <button onClick={() => sumar(1,2)}>Sumar</button>
            <img style={imgSize} className="App-logo" src={foto}></img>
        </div>
    );
}
export default Ejemplo;