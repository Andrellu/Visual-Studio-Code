import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./imagenes.css";

export default class XboxHistorua extends Component {

    state = {
        consolas : [
            {
                nombre : "Xbox",
                fecha : "14/3/2002",
                precio : 450,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Xbox-Console-Set.png/250px-Xbox-Console-Set.png"
            },
            {
                nombre : "Xbox 360",
                fecha : "2/12/2005",
                precio : 300,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Xbox-360-Consoles-Infobox.png/200px-Xbox-360-Consoles-Infobox.png"
            },
            {
                nombre : "Xbox One",
                fecha : "22/11/2013",
                precio : 500,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Microsoft-Xbox-One-Console-wKinect.png/200px-Microsoft-Xbox-One-Console-wKinect.png"
            },
            {
                nombre : "Xbox Series X",
                fecha : "10/11/2020",
                precio : 500,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Xbox_Series_%28X%29.jpg/200px-Xbox_Series_%28X%29.jpg"
            },
            {
                nombre : "Xbox Series S",
                fecha : "10/11/2020",
                precio : 300,
                imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Xbox_Series_S_with_controller.jpg/200px-Xbox_Series_S_with_controller.jpg"
            },
        ]
    }

    render() {
        return (
            <div>
                <h1>Historia XBOX</h1><br/>
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
