import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { RegistroService } from 'src/app/services/servicio-monitoreos/registro/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor( 
    private _CargaScripts:CargarScriptsService,
    private fb: FormBuilder,
    private readonly ps: RegistroService,
    private router: Router
    ) {
    _CargaScripts.Carga(["registro"])
   }

   projectForm = this.fb.group({
    Ruc_Cliente: ['', Validators.required],
    Razon_Social: ['', Validators.required],
    Correo: ['', Validators.required],
    Telefono: ['', Validators.required],
    Contacto: ['', Validators.required],
    Fecha_Tentativa: ['', Validators.required],
    Descripcion_Servicio: ['', Validators.required],
    Tipo_Servicio: ['', Validators.required],
    Precio_Referencia: ['', Validators.required]
   })

   __insert(data:any){
     this.ps.__be_insert(data).subscribe((rest: any) => {
       console.log(rest);
     })
    }

    __onSubmit(){
      if(this.projectForm.valid){
        this.__insert(this.projectForm.value);
      } else {
        alert("Formulario no válido");
      }
    }


  
   

  ngOnInit(): void {
    
    
  }
}

