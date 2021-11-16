import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { ComicsComponent } from './components/comics/comics.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { ComicsinyeccionComponent } from './Components/comicsinyeccion/comicsinyeccion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InsertarComponent,
    ComicsComponent,
    LibreriaComponent,
    ComicsinyeccionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
