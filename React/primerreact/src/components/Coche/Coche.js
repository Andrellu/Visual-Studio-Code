import React, { useState } from "react";

function Coche(props){

    var coche = {
        marca : props.Marca,
        modelo : props.Modelo,
        aceleracion : parseInt(props.Aceleracion),
        velocidadMax : parseInt(props.VelocidadMax)
    };

    // Controla si el coche esta arrancado o parado
    const [estado, setEstado] = useState(false);
    // Controla la velocidad del coche
    const [velocidad, setVelocidad] = useState(0);

    const acelerarCoche = () =>{
        //console.log(coche.aceleracion);
        if(estado == false){
            alert("El coche esta detenido");
            setVelocidad(0);
        } else {
            //console.log(velocidad);
            if(velocidad >= coche.velocidadMax){
                setVelocidad(coche.velocidadMax);
            } else {
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    }

    const validarEstado = (estado) =>{
        if(estado == true){
            setEstado(false);
            setVelocidad(0);
        } else {
            setEstado(true);
        }
        arrancarDetener();
    }

    const arrancarDetener = () => {
        if(estado == false){
            return (
                <span style={{color:"red"}}>Detenido</span>
            );
        } else {
            return (
                <span style={{color:"green"}}>Arrancado</span>
            );
        }
    }

    return (
        <div>
            <h1 style={{color:"blue"}}>Marca : {coche.marca}, Modelo: {coche.modelo}</h1>
            <h2>El coche esta ... {arrancarDetener()}</h2>
            <h2>Velocidad actual del coche: {velocidad}Km/hora</h2>
            {/* <button onClick={() => validarEstado(estado)}>Arrancar/Detener</button> */}
            <button onClick={() => validarEstado(estado)}>Arrancar/Detener</button>
            <button onClick={() => acelerarCoche()}>Acelerar</button>
        </div>
    );

}
export default Coche;