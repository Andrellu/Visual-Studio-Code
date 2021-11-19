import { Routes,  RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { DetallesComponent } from "./Components/detalles/detalles.component";
import { BuscadorPeliculasComponent } from "./Components/buscador-peliculas/buscador-peliculas.component";
import { ModificarpeliculaComponent } from "./Components/modificarpelicula/modificarpelicula.component";

const appRoutes : Routes = [
    {path:"detalleGen/:nacionalidad", component : DetallesComponent},
    {path:"detalleNac/:genero", component : DetallesComponent},
    {path:"buscar/:nombre", component : BuscadorPeliculasComponent},
    {path:"modificar/:idPelicula", component : ModificarpeliculaComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);