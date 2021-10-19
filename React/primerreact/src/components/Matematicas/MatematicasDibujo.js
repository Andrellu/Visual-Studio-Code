import React, { useState } from "react";

function MatematicasDibujo (props) {

    const {NumeroUno, NumeroDos, metodoPadre} = props;

    const [Numerouno, setNumeroUno] = useState(parseInt(NumeroUno));
    const [Numerodos, setNumeroDos] = useState(parseInt(NumeroDos));
    const [Total, setTotal] = useState(0);

    const sumarNumeros = () => {
        setTotal(Numerouno + Numerodos);
    }

    return (
        <div>
            <hr/>
            <h1>Los numeros son {NumeroUno} y {NumeroDos}</h1>
            <h2 style={{color:"Blue"}}>La suma es {Total}</h2>
            <button onClick={sumarNumeros}>Pulsa para sumar</button>
            <button onClick={() =>metodoPadre(Numerouno, Numerodos)}>Pulsa para multiplicar</button>
        </div>
    );
}
export default MatematicasDibujo;