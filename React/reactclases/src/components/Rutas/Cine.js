import React, { Component } from 'react'
import imagenCine from "./../../assets/images/Cine.jpg";

export default class Cine extends Component {
    render() {
        return (
            <div>
                <h1>Estoy en Cine</h1>
                <img src={imagenCine} style={{width : "350px", height:"300px"}}/>
            </div>
        );
    }
}

