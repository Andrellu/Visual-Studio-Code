import { Routes,  RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { DetallesComponent } from "./Components/detalles/detalles.component";
import { BuscadorPeliculasComponent } from "./Components/buscador-peliculas/buscador-peliculas.component";

const appRoutes : Routes = [
    {path:"detalleGen/:nacionalidad", component : DetallesComponent},
    {path:"detalleNac/:genero", component : DetallesComponent},
    {path:"buscar/:nombre", component : BuscadorPeliculasComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);