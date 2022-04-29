import { Form, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
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
  ) {
    
   }

  personas:any[] = [];

  persona:any = {};


  projectForm = this.fb.group({
    Codigo_Solicitud:['', Validators.required],
    Codigo_Analista: ['', Validators.required],
    Cargo: ['', Validators.required],
    Tarea_Asignada: ['', Validators.required]
    
  })

  __insert(data: any) {
    this.ps.__be_insert(data).subscribe((rest: any) => {
      console.log("Llegó");
    })
  }

  guardar(){
    this.personas.push(this.persona);
    this.persona={};
    console.log(this.persona);
  }


  __onSubmit() {
    if (this.projectForm.valid) {
        Swal.fire({
        title: 'Registro',
         text: '¡Se ha registrado!',
        icon: 'success',
        confirmButtonText: 'Ok'
       })
      
      this.__insert(this.projectForm.value);
      
    } else {
      alert("Formulario no válido");
    }
  }

  ngOnInit(): void {
  }

}
