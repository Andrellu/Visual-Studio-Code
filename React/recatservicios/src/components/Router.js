import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DetalleEmpleadoRouter from './RutasEmpleadosParametros/DetalleEmpleadoRouter';

export default class Router extends Component {
   
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/detalleEmpleado/:idempleado" exact render={
                            props =>{
                                var id = props.match.params.idempleado;
                                return <DetalleEmpleadoRouter idempleado={id}/>;
                            }
                        }/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
