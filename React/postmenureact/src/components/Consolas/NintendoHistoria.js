import React, { Component } from 'react'
import "./imagenes.css";
import { NavLink } from "react-router-dom";

export default class NintendoSwitch extends Component {

    state = {
        consolas : [
            {
                nombre : "Super Nintendo",
                fecha : "21/11/1990",
                precio : 200,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Nintendo-Super-Famicom-Set-FL.png/250px-Nintendo-Super-Famicom-Set-FL.png"
            },
            {
                nombre : "Game Boy",
                fecha : "21/1/1991",
                precio : 55,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game-Boy-FL.jpg/250px-Game-Boy-FL.jpg"
            },
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
            },
            {
                nombre : "Nintendo Switch Lite",
                fecha : "20/9/2019",
                precio : 300,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/NintendoSwitchLiteConsole.png/200px-NintendoSwitchLiteConsole.png"
            },
            {
                nombre : "Nintendo Switch OLED",
                fecha : "8/10/2021",
                precio : 350,
                imagen : "data:image/jpeg;base64,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"
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
