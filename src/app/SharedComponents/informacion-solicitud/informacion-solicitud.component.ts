import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaMonitoreosService } from 'src/app/services/consultas/consulta-monitoreos/consulta-monitoreos.service';
import { DisparadorDataService } from 'src/app/services/Disparadores/disparador-data.service';


@Component({
  selector: 'app-informacion-solicitud',
  templateUrl: './informacion-solicitud.component.html',
  styleUrls: ['./informacion-solicitud.component.css']
})
export class InformacionSolicitudComponent implements OnInit {
  solicitud: any;

  constructor(
    private readonly ps: ConsultaMonitoreosService,
    private router: Router,
    private disparate: DisparadorDataService
  ) { }

  

  ngOnInit(): void {
    this.disparate.disparadorData.subscribe(data => {
      console.log("recibiendo data...", data, typeof data);
      this.ps.ConsultarServiciosPorCodigo(data).subscribe((rest: any) => {
        this.solicitud = rest.data;
        console.log(this.solicitud);      
      })
    })
  }

}
