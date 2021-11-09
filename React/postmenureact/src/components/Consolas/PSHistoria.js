import React, { Component } from 'react';
import "./imagenes.css";
import { NavLink } from "react-router-dom";

export default class PSHistoria extends Component {
    
    state = {
        consolas : [
            {
                nombre : "PlayStation",
                fecha : "29/9/1995",
                precio : 360,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/250px-PSX-Console-wController.png"
            },
            {
                nombre : "PocketStation",
                fecha : "23/1/1999",
                precio : 23,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Sony-PocketStation.png/250px-Sony-PocketStation.png"
            },
            {
                nombre : "PlayStation 2",
                fecha : "24/11/2000",
                precio : 450,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PS2-Versions.png/250px-PS2-Versions.png"
            },
            {
                nombre : "PSX",
                fecha : "23/3/2003",
                precio : 360,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Console_psx.jpg/300px-Console_psx.jpg"
            },
            {
                nombre : "PlayStation Portable(PSP)",
                fecha : "3/8/2005",
                precio : 249,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Sony-PSP-1000-Body.png/250px-Sony-PSP-1000-Body.png"
            },
            {
                nombre : "PlayStation 3",
                fecha : "23/3/2007",
                precio : 299,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/PS3Versions.png/200px-PS3Versions.png"
            },
            {
                nombre : "PSP 3000",
                fecha : "15/10/2008",
                precio : 170,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/PSP-3000-Model.png/250px-PSP-3000-Model.png"
            },
            {
                nombre : "PlayStation Portable Go",
                fecha : "1/10/2009",
                precio : 250,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PSPGo_-_Piano_Black.png/250px-PSPGo_-_Piano_Black.png"
            },
            {
                nombre : "PlayStation Vita",
                fecha : "22/2/2012",
                precio : 250,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/PlayStation_Vita_illustration.svg/310px-PlayStation_Vita_illustration.svg.png"
            },
            {
                nombre : "PlayStation 4",
                fecha : "29/11/2013",
                precio : 400,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/PS4-Console-wDS4.jpg/250px-PS4-Console-wDS4.jpg"
            },
            {
                nombre : "PlayStation 5",
                fecha : "19/11/2020",
                precio : 500,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/250px-PlayStation_5_and_DualSense_with_transparent_background.png"
            }
        ]
    }
    
    render() {
        return (
            <div>
                <h1>Hisoria PlayStation</h1><br/>
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
