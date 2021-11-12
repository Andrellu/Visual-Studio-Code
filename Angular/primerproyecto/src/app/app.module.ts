import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponent } from 'src/components/primercomponent/primercomponent.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { Deportes } from 'src/components/deportes/deportes.component';
import { Formulariobindingmodel } from 'src/components/formulario/formulariobindingmodel.component';
import { FormsModule } from '@angular/forms';
import { FormularioReferencia } from 'src/components/formularioreferencia/formularioreferencia.component';
import { TablaMultiplicar } from 'src/components/tablamultiplicar/tablamultiplicar.component';
import { PruebaComponent } from './components/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    Deportes,
    Formulariobindingmodel,
    FormularioReferencia,
    TablaMultiplicar,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
