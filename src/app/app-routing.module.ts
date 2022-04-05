import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaMonitoreosComponent } from './Consultas/consulta-monitoreos/consulta-monitoreos.component';
import { DevolucionEquiposComponent } from './almacen-equipos/devolucion-equipos/devolucion-equipos.component';
import { EstadisticasComponent } from './Consultas/estadisticas/estadisticas.component';
import { HomeComponent } from './home/home.component';
import { InformesComponent } from './servicio-monitoreos/informes/informes.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ConsultaMonitoreos', component: ConsultaMonitoreosComponent },
  {path: 'DatosEstadisticos', component: EstadisticasComponent},
  {path: 'ServicioMonitereos/Informes', component: InformesComponent},
  {path: 'Almacen/Devoluciones', component: DevolucionEquiposComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
