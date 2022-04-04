import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultaMonitoreosComponent } from './consulta-monitoreos/consulta-monitoreos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { DevolucionEquiposComponent } from './devolucion-equipos/devolucion-equipos.component';
import { InformesComponent } from './informes/informes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaMonitoreosComponent,
    EstadisticasComponent,
    DevolucionEquiposComponent,
    InformesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
