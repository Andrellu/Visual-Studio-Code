import React, { Component } from 'react'
import imagenMusica from "./../../assets/images/Musica.jpg";

export default class Musica extends Component {
    render() {
        return (
            <div>
                <h1>Estoy en Musica</h1>
                <img src={imagenMusica} style={{width : "350px", height:"300px"}}/>
        </div>
        );
    }
}
