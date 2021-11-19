import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ServicePeliculas } from './services/peliculas.service';
import { DetallesComponent } from './Components/detalles/detalles.component';
import { DetallespeliculasComponent } from './Components/detallespeliculas/detallespeliculas.component';
import { BuscadorPeliculasComponent } from './Components/buscador-peliculas/buscador-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetallesComponent,
    DetallespeliculasComponent,
    BuscadorPeliculasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, ServicePeliculas],
  bootstrap: [AppComponent]
})
export class AppModule { }
