import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetallesDepartamento from "./Departamentos/DetallesDepartamento";
import EliminarDepartamento from "./Departamentos/EliminarDepartamento";
import InsertarDepartamento from "./Departamentos/InsertarDepartamento";
import MenuDepartamentos from "./Departamentos/MenuDepartamentos";
import ModificarDepartamento from "./Departamentos/ModificarDepartamento";
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
              exact
              path="/detallesDepartamento/:numero/:nombre/:localidad"
              render={(props) => {
                var numero = props.match.params.numero;
                var nombre = props.match.params.nombre;
                var localidad = props.match.params.localidad;
                return (
                  <DetallesDepartamento
                    idDepartamento={numero}
                    nombre={nombre}
                    localidad={localidad}
                  />
                );
              }}
            />
            <Route
              exact
              path="/modificarDepartamento/:numero"
              render={(props) => {
                var num = props.match.params.numero;
                return <ModificarDepartamento idDepartamento={num} />;
              }}
            />
            <Route
              exact
              path="/deleteDepartamento/:numero/:nombre/:localidad"
              render={(props) => {
                var numero = props.match.params.numero;
                var nombre = props.match.params.nombre;
                var localidad = props.match.params.localidad;
                return (
                  <EliminarDepartamento
                    idDepartamento={numero}
                    nombre={nombre}
                    localidad={localidad}
                  />
                );
              }}
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
