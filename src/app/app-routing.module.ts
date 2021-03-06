import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaMonitoreosComponent } from './Consultas/consulta-monitoreos/consulta-monitoreos.component';
import { DevolucionEquiposComponent } from './almacen-equipos/devolucion-equipos/devolucion-equipos.component';
import { EstadisticasComponent } from './Consultas/estadisticas/estadisticas.component';
import { HomeComponent } from './home/home.component';
import { InformesComponent } from './servicio-monitoreos/informes/informes.component';
import { AprobacionSolicitudEquiposComponent } from './almacen-equipos/aprobacion-solicitud-equipos/aprobacion-solicitud-equipos.component';
import { SolicitudEquiposComponent } from './almacen-equipos/solicitud-equipos/solicitud-equipos.component';
import { AsignacionAnalistasComponent } from './plan-monitoreo/asignacion-analistas/asignacion-analistas.component';
import { RegistroComponent } from './servicio-monitoreos/registro/registro.component';
import { GenerarPlanComponent } from './plan-monitoreo/generar-plan/generar-plan.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { TableOrdenesServicioComponent } from './SharedComponents/table-ordenes-servicio/table-ordenes-servicio.component';
import { InformacionProyectoComponent } from './SharedComponents/informacion-proyecto/informacion-proyecto.component';
import { InformacionSolicitudComponent } from './SharedComponents/informacion-solicitud/informacion-solicitud.component';
import { ConsultaSolicitudComponent } from './SharedComponents/consulta-solicitud/consulta-solicitud.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},

  {path: 'ConsultaMonitoreos', component: ConsultaMonitoreosComponent },
  {path: 'DatosEstadisticos', component: EstadisticasComponent},
  {path: 'ServicioMonitereos/Informes', component: InformesComponent},
  {path: 'Almacen/Devoluciones', component: DevolucionEquiposComponent},
  {path: 'Solicitud-Equipos', component: SolicitudEquiposComponent},
  {path: 'Aprobacion-Equipos', component: AprobacionSolicitudEquiposComponent},
  {path: 'Plan-Monitoreo/Asignacion-Analista', component: AsignacionAnalistasComponent},  
  {path: 'Plan-Monitoreo/Generar-Plan', component: GenerarPlanComponent},
  {path: 'ServicioMonitereos/Registro', component: RegistroComponent},
  {path: 'ConsultaSolicitud', component: ConsultaSolicitudComponent},
  
  {path: 'OrdenesServicio', component: TableOrdenesServicioComponent},
  {path: 'InformacionProyecto', component: InformacionProyectoComponent },
  {path: 'InformacionSolicitud', component: InformacionSolicitudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
