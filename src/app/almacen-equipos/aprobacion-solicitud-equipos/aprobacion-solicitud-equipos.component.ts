import { Component, OnInit } from '@angular/core';
import { ConsultaMonitoreosService } from 'src/app/services/consultas/consulta-monitoreos/consulta-monitoreos.service';

@Component({
  selector: 'app-aprobacion-solicitud-equipos',
  templateUrl: './aprobacion-solicitud-equipos.component.html',
  styleUrls: ['./aprobacion-solicitud-equipos.component.css']
})
export class AprobacionSolicitudEquiposComponent implements OnInit {
  proyecto: any
  CodigoServicio = ''

  constructor(
    private readonly ps: ConsultaMonitoreosService
  ) { }

  ngOnInit(): void {
  }

  __ConsultaServicio(){
    this.ps.ObtenerProyecto(this.CodigoServicio).subscribe((rest: any) => {
      this.proyecto = rest.data;
      console.log(this.proyecto);
      //var lista = document.getElementById('profile-feed-1');
    })
  }

}
