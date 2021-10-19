import foto from './../../assets/images/ImagenDos.jpg';
function Ejemplo(props){

    const {Numero1, Numero2} = props;

    // Las variables que pide nuestro metodo no las usamos
    // ahora realizamos la operacion con props.
    const sumar = (numero1, numero2) =>{
        // Recogemos las propiedades de los Ejemplo creados 
        // para luego sumarlos. Debemos hacerle el parse
        // ya que nos devuelve un texto.
        var num1 = parseInt(props.Numero1);
        var num2 = parseInt(props.Numero2);
        // Realizamos la suma.
        var suma = num1 + num2;
        // Mostramos los datos por consola.
        console.log("La suma es :" + suma);
    }
    var imgSize = {
        width: "150px",
        height: "150px"
    };

    return (
        <div className="App">
             <hr/>
            <h1> 1 + 2 </h1>
            <button onClick={() => sumar(1,2)}>Sumar</button>
            <img style={imgSize} className="App-logo" src={foto}></img>
        </div>
    );
}
export default Ejemplo;