import React, { Component } from 'react'
import "./imagenes.css";
import { NavLink } from "react-router-dom";

export default class NintendoSwitch extends Component {

    state = {
        consolas : [
            {
                nombre : "NES-101",
                fecha : "1/12/1993",
                precio : 180,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/NES-101-Console-Set.jpg/250px-NES-101-Console-Set.jpg"
            },
            {
                nombre : "Nintendo64",
                fecha : "23/6/1996",
                precio : 210,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/N64-Console-Set.png/250px-N64-Console-Set.png"
            },
            {
                nombre : "Game Boy Color",
                fecha : "23/11/1998",
                precio : 150,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Game-Boy-Color-FL.jpg/1200px-Nintendo-Game-Boy-Color-FL.jpg"
            },
            {
                nombre : "GameCube",
                fecha : "14/9/2001",
                precio : 199,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GameCube-Console-Set.png/300px-GameCube-Console-Set.png"
            },
            {
                nombre : "Game Boy Advance SP",
                fecha : "14/2/2003",
                precio : 139,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Gameboy-Advance-SP-Mk2.jpg/250px-Gameboy-Advance-SP-Mk2.jpg"
            },
            {
                nombre : "Nintendo DS",
                fecha : "11/3/2005",
                precio : 150,
                imagen : "https://i.blogs.es/391ce9/nintendo-ds-original/450_1000.jpg"
            },
            {
                nombre : "Nintendo DS Lite",
                fecha : "2/3/2006",
                precio : 150,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Nintendo-DS-Lite-w-stylus.png/250px-Nintendo-DS-Lite-w-stylus.png"
            },
            {
                nombre : "Wii",
                fecha : "9/12/2006",
                precio : 249,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Wii_console.png/250px-Wii_console.png"
            },
            {
                nombre : "Nintendo DSi XL",
                fecha : "5/3/2010",
                precio : 261,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Nintendo-DSi-XL-Burg.jpg/250px-Nintendo-DSi-XL-Burg.jpg"
            },
            {
                nombre : "Nintendo 3DS",
                fecha : "25/3/2011",
                precio : 250,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nintendo-3DS-AquaOpen.png/250px-Nintendo-3DS-AquaOpen.png"
            },
            {
                nombre : "Wii U",
                fecha : "25/11/2012",
                precio : 390,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Wii_U_Console_and_Gamepad.png/250px-Wii_U_Console_and_Gamepad.png"
            },
            {
                nombre : "Nintendo Switch",
                fecha : "3/3/2017",
                precio : 330,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Nintendo-Switch-wJoyCons-BlRd-Standing-FL.png/220px-Nintendo-Switch-wJoyCons-BlRd-Standing-FL.png"
            }
        ]
    }


    render() {
        return (
            <div>
                <h1>Historia de Nintendo</h1><br/>
                <div className="row justify-content-center">
                    <div className="col-8 text-center">
                        <table className="table table-striped">
                            <thead>
                                <th>Consola</th>
                                <th>Precio</th>
                                <th>Fecha</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                            </thead>
                            <tbody>
                                {this.state.consolas.map((consola, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{consola.nombre}</td>
                                            <td>{consola.precio}€</td>
                                            <td>{consola.fecha}</td>
                                            <td><img alt="Imagen" src={consola.imagen} className="imgConsola"/></td>
                                            <td><NavLink to="/"><button type="button" className="btn btn-info">Más Detalles</button></NavLink></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
