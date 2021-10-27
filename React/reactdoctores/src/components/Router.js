import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuDorctores from "./Doctores/MenuDorctores";
import MostrarDoctores from "./Doctores/TablaDoctores";
import DoctoresAnadir from "./Doctores/DoctoresAnadir";
import DoctoresModificar from "./Doctores/DoctorModificar";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MenuDorctores />
          <Switch>
            <Route exact path="/mostrarDoctores" component={MostrarDoctores} />
            <Route exact path="/anadirDoctores" component={DoctoresAnadir} />
            <Route
              exact
              path="/modificarDoctores"
              component={DoctoresModificar}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
