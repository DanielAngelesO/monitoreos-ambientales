import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { RegistroService } from 'src/app/services/servicio-monitoreos/registro/registro.service';
import Swal from 'sweetalert2';

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

  formCliente = this.fb.group({
    Ruc_Cliente: ['', Validators.required],
    Razon_Social: ['', Validators.required],
    Correo: ['', Validators.required],
    Telefono: ['', Validators.required],
    Contacto: ['', Validators.required],
  });

  
  LugaresMuestro = this.fb.group({    
    Lugar_Muestreo: ['', Validators.required],
    Coordenada_Longitud: ['', Validators.required],
    Coordenada_Latitud: ['', Validators.required],
    Nombre_Punto: ['', Validators.required]
  })

  formServicio = this.fb.group({    
    Fecha_Tentativa: ['', Validators.required],
    Descripcion_Servicio: ['', Validators.required],
    Tipo_Servicio: ['', Validators.required],
    Precio_Referencia: ['', Validators.required],
    Cliente: this.formCliente,
    lugaresMuestreo: this.LugaresMuestro   
  })


  LeerLugares(){

  }

  personas: any[] = [];

  persona: any = {};

  __insert(data: any) {
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
    /* this.__insert(this.personas); */
    this.__insert(this.formServicio.value);
    this.__insert(this.personas);
    console.log(this.formServicio.value);
    console.log(this.personas);

    

    if (this.formCliente.valid) {
      //   Swal.fire({
      //   title: 'Registro',
      //    text: '¡Se ha registrado!',
      //   icon: 'success',
      //   confirmButtonText: 'Ok'
      //  })
      //this.__insert(this.projectForm.value);
      
    } else {
      
      alert("Formulario no válido");
    }
  }





  ngOnInit(): void {


  }
}



