import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { RegistroService } from 'src/app/services/servicio-monitoreos/registro/registro.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  title = 'sweetAlert';


  constructor(
    private _CargaScripts: CargarScriptsService,
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
    Precio_Referencia: ['', Validators.required],
    Lugar_Muestreo: ['', Validators.required],
    Coordenada_Longitud: ['', Validators.required],
    Coordenada_Latitud: ['', Validators.required],
    Nombre_Punto: ['', Validators.required]
  })


  __insert(data: any) {
    this.ps.__be_insert(data).subscribe((rest: any) => {
      console.log("Llegó");
    })
  }


  __onSubmit() {
    if (this.projectForm.valid) {
      // Swal.fire({
      //   title: 'Registro',
      //   text: '¡Se ha registrado!',
      //   icon: 'success',
      //   confirmButtonText: 'Ok'
      // })
      
      this.__insert(this.projectForm.value);
      
    } else {
      alert("Formulario no válido");
    }
  }





  ngOnInit(): void {


  }
}



