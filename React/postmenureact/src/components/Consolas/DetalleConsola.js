import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
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

export default class DetalleXbox extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.nomConsola}</h1>
                {this.props.nomConsola === "Xbox"? (
                    <div>
                        <img className="consola" alt="xbox" src={xbox}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Xbox 360"?(
                    <div>
                        <img className="consola" alt="xbox360" src={xbox360}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Xbox One"?(
                    <div>
                        <img className="consola" alt="xboxone" src={xboxOne}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Xbox Series X|S"?(
                    <div>
                        <img className="consola" alt="xboxseries" src={xboxSeries}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 1"? (
                    <div>
                        <img className="consola" alt="ps1" src={ps1}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 2"?(
                    <div>
                        <img className="consola" alt="ps2" src={ps2}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 3"?(
                    <div>
                        <img className="consola" alt="ps3" src={ps3}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 4"?(
                    <div>
                        <img className="consola" alt="ps4" src={ps4}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 5" ?(
                    <div>
                        <img className="consola" alt="psp" src={ps5}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PSP 3000"? (
                    <div>
                        <img className="consola" alt="vita" src={psp}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PSP Vita"?(
                    <div>
                        <img className="consola" alt="psVita" src={pspVita}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Game Advance"?(
                    <div>
                        <img className="consola" alt="gameBoy" src={gameBoy}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Nintendo DS" ? (
                    <div>
                        <img className="consola" alt="nds" src={NDS}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Nintendo 3DS" ? (
                    <div>
                        <img className="consola" alt="3d" src={NDS3D}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Nintendo 2DS" ? (
                    <div>
                        <img className="consola" alt="2d" src={NDS2D}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : (
                    <div>
                        <img className="consola" alt="nsoled" src={NSOled}/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                )}
            </div>
        )
    }
}
