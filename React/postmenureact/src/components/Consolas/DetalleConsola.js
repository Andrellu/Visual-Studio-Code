import React, { Component } from 'react'
import "./imagenes.css";
import xbox from "./../../assets/images/Consolas/Xbox_consola.png";
import xbox360 from "./../../assets/images/Consolas/Consola_Xbox360.jpg";
import xboxOne from "./../../assets/images/Consolas/Consola_XboxOne.jpg";
import xboxSeries from "./../../assets/images/Consolas/Consola_XboxSeries.jpg";
import ps1 from "./../../assets/images/Consolas/Consola_PlayStation.jpg";
import ps2 from "./../../assets/images/Consolas/Consola_PlayStation2.jpg";
import ps3 from "./../../assets/images/Consolas/Consola_PlayStation3.jpg";
import ps4 from "./../../assets/images/Consolas/Consola_PlayStation4.jpg";
import ps5 from "./../../assets/images/Consolas/Consola_PlayStation5.jpg";
import psp from "./../../assets/images/Consolas/Consola_PSP3000.jpg";
import pspVita from "./../../assets/images/Consolas/Consola_PlayStationVita.jpg";
import gameBoy from "./../../assets/images/Consolas/Consola_GameBoy.jpg";
import NDS from "./../../assets/images/Consolas/Consola_NDS.jpg";
import NDS3D from "./../../assets/images/Consolas/Consola_NDS3d.jpg";
import NDS2D from "./../../assets/images/Consolas/Consola_NDS2d.jpg";
import NSOled from "./../../assets/images/Consolas/Consola_NintendoSwitch.jpg";
import "./imagenes.css";

export default class DetalleXbox extends Component {
    render() {
        return (
            <div>
                <h1>Soy detalles de la consola: {this.props.nomConsola}</h1>
                {this.props.nomConsola === "Xbox"? (
                    <img className="consola" alt="xbox" src={xbox}/>
                ) : this.props.nomConsola === "Xbox 360"?(
                    <img className="consola" alt="xbox360" src={xbox360}/>
                ) : this.props.nomConsola === "Xbox One"?(
                    <img className="consola" alt="xboxone" src={xboxOne}/>
                ) : this.props.nomConsola === "Xbox Series X|S"?(
                    <img className="consola" alt="xboxseries" src={xboxSeries}/>
                ) : this.props.nomConsola === "PlayStation 1"? (
                    <img className="consola" alt="ps1" src={ps1}/>
                ) : this.props.nomConsola === "PlayStation 2"?(
                    <img className="consola" alt="ps2" src={ps2}/>
                ) : this.props.nomConsola === "PlayStation 3"?(
                    <img className="consola" alt="ps3" src={ps3}/>
                ) : this.props.nomConsola === "PlayStation 4"?(
                    <img className="consola" alt="ps4" src={ps4}/>
                ) : this.props.nomConsola === "PlayStation 5" ?(
                    <img className="consola" alt="psp" src={ps5}/>
                ) : this.props.nomConsola === "PSP 3000"? (
                    <img className="consola" alt="vita" src={psp}/>
                ) : this.props.nomConsola === "PSP Vita"?(
                    <img className="consola" alt="psVita" src={pspVita}/>
                ) : this.props.nomConsola === "Game Advance"?(
                    <img className="consola" alt="gameBoy" src={gameBoy}/>
                ) : this.props.nomConsola === "Nintendo DS" ? (
                    <img className="consola" alt="nds" src={NDS}/>
                ) : this.props.nomConsola === "Nintendo 3DS" ? (
                    <img className="consola" alt="3d" src={NDS3D}/>
                ) : this.props.nomConsola === "Nintendo 2DS" ? (
                    <img className="consola" alt="2d" src={NDS2D}/>
                ) : (
                    <img className="consola" alt="nsoled" src={NSOled}/>
                )}
            </div>
        )
    }
}
