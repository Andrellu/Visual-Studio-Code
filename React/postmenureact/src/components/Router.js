import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuConsolas from "./Consolas/MenuConsolas";
import NintendoHistoria from './Consolas/NintendoHistoria';
import XboxHistorua from './Consolas/XboxHistorua';
import DetalleConsola from "./Consolas/DetalleConsola";
import inicio from "./Consolas/Inicio";

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuConsolas/>
                    <Switch>
                    <Route exact path="/" component={inicio}/>
                        <Route exact path="/home" component={inicio}/>
                        <Route exact path="/mostrarNintendo" component={NintendoHistoria}/>
                        <Route exact path="/mostrarXbox" component={XboxHistorua}/>
                        <Route exact path="/mostrarConsola/:consola" render={(props) => {
                            var consola = props.match.params.consola;
                            return <DetalleConsola nomConsola={consola} />;
                        }}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
