import { Routes,  RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { InsertardepartamentoComponent } from "./components/insertardepartamento/insertardepartamento.component";
import { EditardepartamentoComponent } from "./components/editardepartamento/editardepartamento.component";
import { EmpleadosdepartamentoComponent } from "./components/empleadosdepartamento/empleadosdepartamento.component";
import { IncrementarsalarioempleadoComponent } from "./components/incrementarsalarioempleado/incrementarsalarioempleado.component";

const appRoutes : Routes = [
    {path:"", component : HomeComponent},
    {path:"home", component : HomeComponent},
    {path:"eliminar/:iddepartamento", component : HomeComponent},
    {path:"insertar", component : InsertardepartamentoComponent},
    {path:"editar/:numero/:nombre/:localidad", component : EditardepartamentoComponent},
    {path:"emple/:idDepartamento", component : EmpleadosdepartamentoComponent},
    {path:"incrementar/:idEmpleado", component : IncrementarsalarioempleadoComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);