import Matematicas from "../Matematicas/MatematicasDibujo";
import React, { useState } from "react";
import MatematicasDibujo from "../Matematicas/MatematicasDibujo";

function PadreDibujo(){

    const [Total, setToatal] = useState(0);

    const [numUno, setNumUno] = useState(0);
    const [numDos, setNumDos] = useState(0);

    const multiplicarPadre = (NumeroUno, NumeroDos) => {
        setToatal(NumeroUno*NumeroDos);
        setNumUno(NumeroUno);
        setNumDos(NumeroDos);
    }

    return (
        <div>
            <h1 style={{color:"green"}}>La multiplicacion de {numUno} x {numDos} será : {Total}</h1>           
            <MatematicasDibujo NumeroUno="1" NumeroDos="5" metodoPadre={multiplicarPadre}/>
            <MatematicasDibujo NumeroUno="2" NumeroDos="5" metodoPadre={multiplicarPadre}/>
            <MatematicasDibujo NumeroUno="3" NumeroDos="5" metodoPadre={multiplicarPadre}/>
            <MatematicasDibujo NumeroUno="4" NumeroDos="5" metodoPadre={multiplicarPadre}/>
            <MatematicasDibujo NumeroUno="5" NumeroDos="5" metodoPadre={multiplicarPadre}/>    
        </div>
    );
}
export default PadreDibujo;