import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuConsolas from "./Consolas/MenuConsolas";
import NintendoHistoria from './Consolas/NintendoHistoria';
import XboxHistorua from './Consolas/XboxHistorua';
import PSHistoria from './Consolas/PSHistoria';
import DetalleConsola from "./Consolas/DetalleConsola";
import inicio from "./Consolas/Inicio";
import Error404 from './Consolas/Error404';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    {/*Este es mi menú*/}
                    <MenuConsolas/>
                    {/*Esto es lo que irá vairando en nuestra página*/}
                    <Switch>
                        {/*RUTAS CREADAS EN NUESTRO MENÚ*/}
                        <Route exact path="/" component={inicio}/>
                        <Route exact path="/home" component={inicio}/>
                        <Route exact path="/mostrarPlayStation" component={PSHistoria}/>
                        <Route exact path="/mostrarNintendo" component={NintendoHistoria}/>
                        <Route exact path="/mostrarXbox" component={XboxHistorua}/>
                        <Route exact path="/mostrarConsola/:consola" render={(props) => {
                            var consola = props.match.params.consola;
                            return <DetalleConsola nomConsola={consola} />;
                        }}/>
                        {/*RUTA POR SI INTRODUCIMOS UNA URL QUE NO EXISTE*/}
                        {/* <Route exact path="*" component={Error404}/> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
