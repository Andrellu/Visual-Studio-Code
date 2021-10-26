import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MostrarHospital  from "./Hospital/MostrarHospital";
import InsertarHospital  from "./Hospital/InsertarHospital";
import ModificarHospital from "./Hospital/ModificarHospital";
import EliminarHospital from "./Hospital/EliminarHospital";
import MenuHospital from "./Hospital/MenuHospital";

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuHospital/>
                    <Switch>
                        <Route exact path="/mostrarHospital" component={MostrarHospital}/>
                        <Route exact path="/insertarHospital" component={InsertarHospital}/>
                        <Route exact path="/modificarHospital" component={ModificarHospital}/>
                        <Route exact path="/eliminarHospital" component={EliminarHospital}/>
                    </Switch>
            </BrowserRouter>
            </div>
        )
    }
}
