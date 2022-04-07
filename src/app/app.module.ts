import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultaMonitoreosComponent } from './Consultas/consulta-monitoreos/consulta-monitoreos.component';
import { EstadisticasComponent } from './Consultas/estadisticas/estadisticas.component';
import { DevolucionEquiposComponent } from './almacen-equipos/devolucion-equipos/devolucion-equipos.component';
import { InformesComponent } from './servicio-monitoreos/informes/informes.component';
import { SolicitudEquiposComponent } from './almacen-equipos/solicitud-equipos/solicitud-equipos.component';
import { AprobacionSolicitudEquiposComponent } from './almacen-equipos/aprobacion-solicitud-equipos/aprobacion-solicitud-equipos.component';
import { AsignacionAnalistasComponent } from './plan-monitoreo/asignacion-analistas/asignacion-analistas.component';
import { EstimacionComponent } from './plan-monitoreo/estimacion/estimacion.component';
import { RegistroComponent } from './servicio-monitoreos/registro/registro.component';
import { GenerarPlanComponent } from './plan-monitoreo/generar-plan/generar-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaMonitoreosComponent,
    EstadisticasComponent,
    DevolucionEquiposComponent,
    InformesComponent,
    SolicitudEquiposComponent,
    AprobacionSolicitudEquiposComponent,
    AsignacionAnalistasComponent,
    EstimacionComponent,
    RegistroComponent,
    GenerarPlanComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
