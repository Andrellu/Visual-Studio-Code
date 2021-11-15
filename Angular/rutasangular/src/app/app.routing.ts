import { Routes,  RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {HomeComponent} from "./components/home/home.component";
import {MusicaComponent} from "./components/musica/musica.component";
import {CineComponent } from "./components/cine/cine.component";
import {TelevisionComponent} from "./components/television/television.component";
import { Error404Component } from "./components/error404/error404.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { CollatzComponent } from "./components/collatz/collatz.component";
import { ListaproductocomponentComponent } from "./components/listaproductocomponent/listaproductocomponent.component";
import { CocheComponent } from "./components/coche/coche.component";
import { ConcesionarioComponent } from "./components/concesionario/concesionario.component";

 const appRoutes : Routes = [
     {path:"", component : HomeComponent},
     {path:"home", component : HomeComponent},
     {path:"musica", component : MusicaComponent},
     {path:"television", component : TelevisionComponent},
     {path:"cine", component : CineComponent},
     {path:"numeroDoble", component : NumerodobleComponent},
     {path:"numeroDoble/:numero", component : NumerodobleComponent},
     {path:"collatz/:numero", component : CollatzComponent},
     {path:"listaproductos", component : ListaproductocomponentComponent},
     {path:"coche", component : ConcesionarioComponent},
     {path:"**", component : Error404Component},
 ];

 export const appRoutingProviders : any[] = [];
 export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);