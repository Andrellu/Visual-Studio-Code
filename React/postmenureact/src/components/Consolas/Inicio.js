import React, { Component } from 'react'
import fondo from "./../../assets/images/Fondos/Fondo_inicio.jpg";

export default class Inicio extends Component {
    render() {
        return (
            <div>
                <img style={{ width: "100%", height: "100%" }} src={fondo} alt="fondo"/>
            </div>
        )
    }
}
