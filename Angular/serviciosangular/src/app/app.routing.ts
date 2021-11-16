import { Routes,  RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { InsertarComponent } from "./components/insertar/insertar.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { ComicsinyeccionComponent } from "./components/comicsinyeccion/comicsinyeccion.component";

const appRoutes : Routes = [
    {path:"home", component : InsertarComponent},
    {path:"libreria", component : LibreriaComponent},
    {path:"service", component : ComicsinyeccionComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);