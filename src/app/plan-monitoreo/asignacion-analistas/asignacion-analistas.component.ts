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

  constructor(
    private fb: FormBuilder,
    private readonly ps: AsignacionAnalistasService,
    private disparate: DisparadorDataService
  ) {

  }


  __ConsultaSolicitud() {      
    this.disparate.disparadorData.emit(this.persona.Codigo_Solicitud);    
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
    console.log(this.projectForm.value);
    /* console.log(this.guardar()); */
    
  }



  ngOnInit(): void {


  }

}
