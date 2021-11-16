import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { ComicsComponent } from './components/comics/comics.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicService } from './services/comics.service';
import {HttpClientModule} from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { ServicePersonas } from './services/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InsertarComponent,
    ComicsComponent,
    LibreriaComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders, ComicService, ServicePersonas],
  bootstrap: [AppComponent]
})
export class AppModule { }
