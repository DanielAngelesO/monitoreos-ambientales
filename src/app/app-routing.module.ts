import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobacionSolicitudEquiposComponent } from './aprobacion-solicitud-equipos/aprobacion-solicitud-equipos.component';
import { ConsultaMonitoreosComponent } from './consulta-monitoreos/consulta-monitoreos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { HomeComponent } from './home/home.component';
import { SolicitudEquiposComponent } from './solicitud-equipos/solicitud-equipos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ConsultaMonitoreos', component: ConsultaMonitoreosComponent },
  {path: 'DatosEstadisticos', component: EstadisticasComponent},
  {path: 'Solicitud-Equipos', component: SolicitudEquiposComponent},
  {path: 'Aprobacion-Equipos', component: AprobacionSolicitudEquiposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
