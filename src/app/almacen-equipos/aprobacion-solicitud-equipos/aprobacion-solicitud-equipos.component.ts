import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AprobacionSolicitudEquiposService } from 'src/app/services/almacen-equipos/aprobacion-solicitud-equipos/aprobacion-solicitud-equipos.service';
import { ConsultaMonitoreosService } from 'src/app/services/consultas/consulta-monitoreos/consulta-monitoreos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aprobacion-solicitud-equipos',
  templateUrl: './aprobacion-solicitud-equipos.component.html',
  styleUrls: ['./aprobacion-solicitud-equipos.component.css']
})
export class AprobacionSolicitudEquiposComponent implements OnInit {
  proyecto: any
  CodigoServicio = ''

  constructor(
    private readonly ps: ConsultaMonitoreosService,
    private readonly as: AprobacionSolicitudEquiposService
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

  __AprobarEquipos(){
    this.as.__getAprobacion(this.CodigoServicio).subscribe((rest: any) => {
      if(rest.issuccess){
        Swal.fire({
          title: 'Operación Exitosa',
          text: 'Se aprobó la solicitud de equipos correctamente',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          this.refresh();
        })

      }
      else{

        Swal.fire({
          title: 'Atención',
          text: 'Su solicitud no pudo ser completada',
          icon: 'error',
          confirmButtonText: 'Ok'
        }).then(() => {
          this.refresh();
        })

      }

    });
    
  }

  refresh(): void {
    window.location.reload();
  }



}
