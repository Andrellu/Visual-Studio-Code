import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuDorctores from "./Doctores/MenuDorctores";
import MostrarDoctores from "./Doctores/TablaDoctores";
import DoctoresAnadir from "./Doctores/DoctoresAnadir";
import DoctoresModificar from "./Doctores/DoctorModificar";
import DoctoresEliminar from "./Doctores/DoctoresEliminar";

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
              path="/modificarDoctores/:id"
              render = {(props) => {
                var numDoc = props.match.params.id;
                return (<DoctoresModificar idDoctor={numDoc}/>);
              }}
            />
            <Route
            exact
            path="/eliminarDoctor/:id/:apellido"
            render = {(props) => {
              var numDoc = props.match.params.id;
              var ape = props.match.params.apellido;
              return (<DoctoresEliminar idDoctor={numDoc} apellido={ape}/>);
            }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
