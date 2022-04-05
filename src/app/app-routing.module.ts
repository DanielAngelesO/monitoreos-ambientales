import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaMonitoreosComponent } from './Consultas/consulta-monitoreos/consulta-monitoreos.component';
import { DevolucionEquiposComponent } from './almacen-equipos/devolucion-equipos/devolucion-equipos.component';
import { EstadisticasComponent } from './Consultas/estadisticas/estadisticas.component';
import { HomeComponent } from './home/home.component';
import { InformesComponent } from './servicio-monitoreos/informes/informes.component';
import { AprobacionSolicitudEquiposComponent } from './aprobacion-solicitud-equipos/aprobacion-solicitud-equipos.component';
import { SolicitudEquiposComponent } from './solicitud-equipos/solicitud-equipos.component';
import { AsignacionAnalistasComponent } from './plan-monitoreo/asignacion-analistas/asignacion-analistas.component';
import { EstimacionComponent } from './plan-monitoreo/estimacion/estimacion.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ConsultaMonitoreos', component: ConsultaMonitoreosComponent },
  {path: 'DatosEstadisticos', component: EstadisticasComponent},
  {path: 'ServicioMonitereos/Informes', component: InformesComponent},
  {path: 'Almacen/Devoluciones', component: DevolucionEquiposComponent},
  {path: 'Solicitud-Equipos', component: SolicitudEquiposComponent},
  {path: 'Aprobacion-Equipos', component: AprobacionSolicitudEquiposComponent},
  {path: 'Plan-Monitoreo/Asignacion-Analista', component: AsignacionAnalistasComponent},
  {path: 'Plan-Monitoreo/Estimacion', component: EstimacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
