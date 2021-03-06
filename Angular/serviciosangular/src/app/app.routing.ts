import { Routes,  RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { InsertarComponent } from "./components/insertar/insertar.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { ComicsinyeccionComponent } from "./components/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { EmpleadossalarioComponent } from "./components/empleadossalario/empleadossalario.component";
import { EmpleadosoficioComponent } from "./components/empleadosoficio/empleadosoficio.component";
import { ListadoempleadosComponent } from "./components/listadoempleados/listadoempleados.component";
import { DetalleempleadoComponent } from "./components/detalleempleado/detalleempleado.component";

const appRoutes : Routes = [
    {path:"home", component : InsertarComponent},
    {path:"libreria", component : LibreriaComponent},
    {path:"service", component : ComicsinyeccionComponent},
    {path:"servicepersona", component : PersonasapiComponent},
    {path:"servicempleado", component : EmpleadossalarioComponent},
    {path:"servicempleadodos", component : EmpleadosoficioComponent},
    {path:"servicelista", component : ListadoempleadosComponent},
    {path:"detalleempleado/:idEmpleado", component : DetalleempleadoComponent}
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);