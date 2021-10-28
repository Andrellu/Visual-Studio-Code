import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apuestas from "./Futbol/Apuestas";
import Equipos from "./Futbol/Equipos";
import Home from "./Futbol/Home";
import Jugador from "./Futbol/Jugador";
import MenuFutbol from "./Futbol/MenuFutbol";
import NuevaApuesta from "./Futbol/NuevaApuesta";
import TablaJugadores from "./Futbol/TablaJugadores";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MenuFutbol />
          <Switch>
            <Route exact path="/mostrarHome" component={Home} />
            <Route exact path="/mostrarApuestas" component={Apuestas} />
            <Route exact path="/apuesta" component={NuevaApuesta} />
            <Route
              exact
              path="/equipo/:id"
              render={(props) => {
                var numDoc = props.match.params.id;
                return <Equipos idEquipo={numDoc} />;
              }}
            />
            <Route
              exact
              path="/tablaJugadores/:id"
              render={(props) => {
                var numDoc = props.match.params.id;
                return <TablaJugadores idEquipo={numDoc} />;
              }}
            />
            <Route
              exact
              path="/jugador/:id"
              render={(props) => {
                var numDoc = props.match.params.id;
                return <Jugador idJugador={numDoc} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
