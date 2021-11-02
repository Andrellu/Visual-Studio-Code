import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuSeries from "./components/Series/MenuSeries";
import Serie from "./components/Series/CargarSerie";
import CargarPersonajes from "./components/Series/CargarPersonajes";
import InsertarPersonaje from "./components/Series/InsertarPersonaje";
import ModificarPersonaje from "./components/Series/ModificarPersonaje";
import Home from "./components/Series/Home";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MenuSeries />
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/insertarPersonaje" component={InsertarPersonaje} />
            <Route path="/modificarPersonaje" component={ModificarPersonaje} />
            <Route
              exact
              path="/serie/:id"
              render={(props) => {
                var numDoc = props.match.params.id;
                return <Serie idSerie={numDoc} />;
              }}
            />
            <Route
              exact
              path="/personajes/:id"
              render={(props) => {
                var numDoc = props.match.params.id;
                return <CargarPersonajes idSerie={numDoc} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
