import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaMonitoreosComponent } from './consulta-monitoreos/consulta-monitoreos.component';
import { DevolucionEquiposComponent } from './devolucion-equipos/devolucion-equipos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { HomeComponent } from './home/home.component';
import { InformesComponent } from './informes/informes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ConsultaMonitoreos', component: ConsultaMonitoreosComponent },
  {path: 'DatosEstadisticos', component: EstadisticasComponent},
  {path: 'Informes', component: InformesComponent},
  {path: 'Devoluciones', component: DevolucionEquiposComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
