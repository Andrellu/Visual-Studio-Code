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
            <h1 style={{color:"green"}}>La multiplicacion será : {Total}</h1>
            <div>
                <MatematicasDibujo NumeroUno="2" NumeroDos="5" metodoPadre={multiplicarPadre}/>
                <MatematicasDibujo NumeroUno="3" NumeroDos="5" metodoPadre={multiplicarPadre}/>
                <MatematicasDibujo NumeroUno="4" NumeroDos="5" metodoPadre={multiplicarPadre}/>
                <MatematicasDibujo NumeroUno="5" NumeroDos="5" metodoPadre={multiplicarPadre}/>
            </div>
        </div>
    );
}
export default PadreDibujo;