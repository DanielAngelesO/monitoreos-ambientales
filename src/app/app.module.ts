import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultaMonitoreosComponent } from './consulta-monitoreos/consulta-monitoreos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { SolicitudEquiposComponent } from './solicitud-equipos/solicitud-equipos.component';
import { AprobacionSolicitudEquiposComponent } from './aprobacion-solicitud-equipos/aprobacion-solicitud-equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaMonitoreosComponent,
    EstadisticasComponent,
    SolicitudEquiposComponent,
    AprobacionSolicitudEquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
