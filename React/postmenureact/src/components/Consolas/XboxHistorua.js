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
                <di className="row justify-content-center">
                    <div className="col-8 text-center">
                        <p>
                            La Xbox fue desarrollada por un pequeño equipo de desarrolladores de videojuegos contratados por Microsoft. Microsoft retrasó en varias ocasiones la noticia de su nueva consola, y finalmente fue revelado como proyecto a finales de 1999, a raíz de las entrevistas con Bill Gates. Gates dijo que un dispositivo de juego de entretenimiento era esencial para la convergencia multimedia en los nuevos tiempos del ocio digital. El 10 de marzo de 2000, fue confirmado el nuevo proyecto Xbox, mediante un comunicado oficial de Microsoft.

                            Entonces, Microsoft lanzó en 2001 su Xbox, fue su primera consola de sobremesa (en colaboración con Intel) y compitió contra la PlayStation 2, la segunda consola de Sony, la Gamecube de Nintendo y el Dreamcast de Sega. Su principal característica es su procesador central basado en el procesador Intel Pentium III. El sistema también incorpora un lector de DVD, un disco duro interno, puerto ethernet y por último el sistema dispone de cuatro conectores para los mandos.

                            La arquitectura de la Xbox está basada en la arquitectura x86 similar a la de un PC, lo que facilitó a los desarrolladores adaptar un gran número de títulos de PC para la Xbox, ayudando a ampliar el catálogo de juegos de la consola.

                            Después de su lanzamiento, Microsoft comenzó a trabajar en su sucesor utilizando una arquitectura diferente. A finales de 2005, fue lanzada la Xbox 360 como sucesora de la Xbox. En 2008, Microsoft retira del mercado la Xbox para así dedicarse a la comercialización de la Xbox 360. Las unidades vendidas de este equipo fueron 24 millones de consolas, según las cifras oficiales.    
                            <br/><a href="https://es.wikipedia.org/wiki/Xbox_(marca)#:~:text=La%20Xbox%20fue%20desarrollada%20por,las%20entrevistas%20con%20Bill%20Gates.">Mas Información</a>
                        </p><br/>
                    </div>
                </di>
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
