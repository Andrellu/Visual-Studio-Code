import React, { Component } from 'react'
import "./imagenes.css";
import xbox from "./../../assets/images/Consolas/Xbox_consola.png";
import xbox360 from "./../../assets/images/Consolas/Consola_Xbox360.jpg";
import xboxOne from "./../../assets/images/Consolas/Consola_XboxOne.jpg";
import xboxSeries from "./../../assets/images/Consolas/Consola_XboxSeries.jpg";

export default class DetalleXbox extends Component {
    render() {
        return (
            <div>
                <h1>Soy detalles de la consola: {this.props.nomConsola}</h1>
                {this.props.nomConsola == "Xbox"? (
                    <img className="consola" src={xbox}/>
                ) : this.props.nomConsola == "Xbox 360"?(
                    <img className="consola" src={xbox360}/>
                ) : this.props.nomConsola == "Xbox One"?(
                    <img className="consola" src={xboxOne}/>
                ) : (
                    <img className="consola" src={xboxSeries}/>
                )}
            </div>
        )
    }
}
