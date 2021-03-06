import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

import { ServiceDepartamentos } from './services/departamentos.service';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { EditardepartamentoComponent } from './components/editardepartamento/editardepartamento.component';
import { ServiceEmpleados } from './services/empleados.service';
import { EmpleadosdepartamentoComponent } from './components/empleadosdepartamento/empleadosdepartamento.component';
import { IncrementarsalarioempleadoComponent } from './components/incrementarsalarioempleado/incrementarsalarioempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InsertardepartamentoComponent,
    EditardepartamentoComponent,
    EmpleadosdepartamentoComponent,
    IncrementarsalarioempleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, ServiceDepartamentos, ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
