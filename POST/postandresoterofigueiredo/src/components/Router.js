import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Menu/Menu";
import Nintendo from "./Consolas/Nintendo";

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Menu />
                    <Switch>
                        <Route exact path="/mostrarNintendo" component={Nintendo} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
