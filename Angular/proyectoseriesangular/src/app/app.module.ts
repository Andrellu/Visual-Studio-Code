import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceSeries } from './services/series.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetallesserieComponent } from './components/detallesserie/detallesserie.component';
import { TablapersonajesComponent } from './components/tablapersonajes/tablapersonajes.component';
import { InsertarpersonajesComponent } from './components/insertarpersonajes/insertarpersonajes.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetallesserieComponent,
    TablapersonajesComponent,
    InsertarpersonajesComponent,
    ModificarpersonajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
