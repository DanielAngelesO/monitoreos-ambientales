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
    this.disparate.disparadorData.emit(this.persona.Codigo_Solicitud);
  }

  __insert(data: any) {
    console.log(data);
    this.ps.__be_insert(data).subscribe((rest: any) => {
      console.log("Llegó");
    })
  }


  guardar() {
    this.personas.push(this.persona);
    this.persona = {};

    console.log(this.personas);
  }

  refresh(): void {
    window.location.reload();
  }

  __onSubmit() {
    
    Swal.fire({
      title: 'Registro',
      text: '¡Se ha registrado!',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then(() => {
      this.refresh();
    })
    
    
    this.__insert(this.personas);
    console.log(this.personas);
    /* console.log(this.guardar()); */
    
  }

  ngOnInit(): void {
  }

}
