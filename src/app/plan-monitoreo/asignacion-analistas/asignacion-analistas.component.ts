import { Form, FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { DisparadorDataService } from 'src/app/services/Disparadores/disparador-data.service';
import { AsignacionAnalistasService } from 'src/app/services/plan-monitoreo/asignacion-analistas/asignacion-analistas.service';


@Component({
  selector: 'app-asignacion-analistas',
  templateUrl: './asignacion-analistas.component.html',
  styleUrls: ['./asignacion-analistas.component.css']
})
export class AsignacionAnalistasComponent {
  CodigoSolicitudBuscado = 0;
  constructor(
    private fb: FormBuilder,
    private readonly ps: AsignacionAnalistasService,
    private disparate: DisparadorDataService
  ) {

  }


  __ConsultaSolicitud() {
    console.log(this.persona.Codigo_Solicitud);

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




  personas: any[] = [];

  persona: any = {};



  projectForm = this.fb.group({
    Codigo_Solicitud: ['', [Validators.required]],
    Codigo_Analista: ['', Validators.required],
    Cargo: ['', Validators.required],
    Tarea_Asignada: ['', Validators.required]

  })



  __insert(data: any) {
    console.log(data);
    this.ps.__be_insert(data).subscribe((rest: any) => {
      console.log("Llegó: ", rest);
      if(rest.issuccess){
        Swal.fire({
          title: 'Registro',
          text: '¡Se ha registrado!',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          this.refresh();
        })
      }else{
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Su solicitud no pudo ser completada, ya que uno o mas analistas ya han sido asignados al proyecto'
        })
      }
      
    })
  }

  guardar() {
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
        text: 'Favor registrar al menos un analista'
      })
    }
  }



  ngOnInit(): void {


  }

}
