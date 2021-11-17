import { Routes,  RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { DetallesserieComponent } from "./components/detallesserie/detallesserie.component";
import { TablapersonajesComponent } from "./components/tablapersonajes/tablapersonajes.component";
import { InsertarpersonajesComponent } from "./components/insertarpersonajes/insertarpersonajes.component";
import { ModificarpersonajeComponent } from "./components/modificarpersonaje/modificarpersonaje.component";

const appRoutes : Routes = [
    {path:"detallesseries/:idSerie", component : DetallesserieComponent},
    {path:"tablapersonajes/:idSerie", component : TablapersonajesComponent},
    {path:"insertar", component : InsertarpersonajesComponent},
    {path:"modificar", component : ModificarpersonajeComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);