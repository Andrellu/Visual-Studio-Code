import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InsertarDepartamento from "./Departamentos/InsertarDepartamento";
import MenuDepartamentos from "./Departamentos/MenuDepartamentos";
import TablaDepartamentos from "./Departamentos/TablaDepartamentos";
import DetalleEmpleadoRouter from "./RutasEmpleadosParametros/DetalleEmpleadoRouter";
import EmpleadosRouter from "./RutasEmpleadosParametros/EmpleadosRouter";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MenuDepartamentos />
          <Switch>
            <Route exact path="/departamentos" component={TablaDepartamentos} />
            <Route
              exact
              path="/createDepartamento"
              component={InsertarDepartamento}
            />
            <Route
              path="/detalleEmpleado/:idempleado"
              exact
              render={(props) => {
                var id = props.match.params.idempleado;
                return <DetalleEmpleadoRouter idempleado={id} />;
              }}
            />
          </Switch>
          {/* <EmpleadosRouter /> */}
        </BrowserRouter>
      </div>
    );
  }
}
