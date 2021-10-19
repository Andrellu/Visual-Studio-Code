import React, {useState} from 'react';
//import { useState } from "react";
function Contador() {

    // Creamos la variable con su [GET, SET]
    //  Asignamos el valor con useState(Valor)
    const [Numero, setNumero] = useState(0);

    const sumarContador = () => {
        // Cambiamos el valor del contador
        setNumero(Numero + 1);
    }


    return (
        <div>
            <h1>Ejemplo State React</h1>
            <h2 style={{color:"blue"}}>Valor de contador: {Numero}</h2>
            <button onClick={() => sumarContador()}>Incrementar contador</button>
            {/* Declaramos una funcion anónima dentro del onclick */}
            <button onClick={() => {
                setNumero(Numero - 1);
            }}>Restar contador</button>
        </div>
    );
}
export default Contador;