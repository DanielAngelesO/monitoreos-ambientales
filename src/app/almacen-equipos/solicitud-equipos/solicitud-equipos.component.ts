import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SolicitudEquiposService } from 'src/app/services/almacen-equipos/solicitud-equipos/solicitud-equipos.service';
import { DisparadorDataService } from 'src/app/services/Disparadores/disparador-data.service';

@Component({
  selector: 'app-solicitud-equipos',
  templateUrl: './solicitud-equipos.component.html',
  styleUrls: ['./solicitud-equipos.component.css']
})
export class SolicitudEquiposComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private readonly ps: SolicitudEquiposService,
    private disparate: DisparadorDataService
  ) {

  }

  CodigoSolicitudBuscado = 0;
  personas: any[] = [];
  persona: any = {};
  projectForm = this.fb.group({
    codigo_Solicitud: ['', [Validators.required]],
    equipo: ['', Validators.required],
    cantidad: ['', Validators.required],
    matriz: ['', Validators.required],
    fecha_Salida: ['', Validators.required],
    fecha_Retorno: ['', Validators.required]

  })


  
  __ConsultaSolicitud() {
    
    if(this.persona.Codigo_Solicitud != '' && this.persona.Codigo_Solicitud != undefined){
      this.disparate.disparadorData.emit(this.persona.Codigo_Solicitud);
      this.CodigoSolicitudBuscado = this.persona.Codigo_Solicitud;
    }else{

      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Favor ingresar una solicitud válida'
      })

    }

  }

  __insert(data: any) {
    
    this.ps.__be_insert(data).subscribe((rest: any) => {
      console.log("Llegó: ", rest);
      if(rest.issuccess){
        Swal.fire({
          title: '¡Registro Existoso!',
          text: 'Su solicitud fue ingresada con correctamente',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          //this.refresh();
        })

      }else{
        Swal.fire({
          icon: 'warning',
          title: 'Atención...',
          text: 'Favor Verificar que los códigos de los equipos estén correctos.'
        })
      }
      
    })
  }


  Agregar() {

    if(this.CodigoSolicitudBuscado != 0){
      this.persona.Codigo_Solicitud = this.CodigoSolicitudBuscado
      this.personas.push(this.persona);
      this.persona = {};
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Favor ingresar una solicitud válida'
      })
    }
  }

  refresh(): void {
    window.location.reload();
  }

  __onSubmit() {
    if(this.personas.length > 0){
      this.__insert(this.personas);
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Favor registrar al menos un equipo'
      })
    }
    
  }

  ngOnInit(): void {
  }

}
