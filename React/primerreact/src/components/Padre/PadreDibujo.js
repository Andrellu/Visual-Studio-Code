import Matematicas from "../Matematicas/MatematicasDibujo";
import React, { useState } from "react";
import MatematicasDibujo from "../Matematicas/MatematicasDibujo";

function PadreDibujo(){

    const [Total, setToatal] = useState(0);

    const multiplicarPadre = (NumeroUno, NumeroDos) => {
        setToatal(NumeroUno*NumeroDos);
    }

    return (
        <div>
            <h1 >La multiplicacion será : {Total}</h1>
            <MatematicasDibujo NumeroUno="2" NumeroDos="5" metodoPadre={multiplicarPadre}/>
        </div>
    );
}
export default PadreDibujo;