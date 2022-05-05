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

  personas: any[] = [];

  persona: any = {};

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
    codigo_Solicitud: [0, Validators.required],
    fecha_Tentativa: ['', Validators.required],
    // Descripcion_Servicio: ['', Validators.required],
    cod_Servicio: ['', Validators.required],
    // Precio_Referencia: ['', Validators.required],
    cliente: this.formCliente,
    lugaresMuestreo: this.fb.array([])
  });
  

  __insert(data: any) {
    const token  = sessionStorage.getItem('token')
    const header = { Authorization: 'Bearer ' + token }

    this.ps.__be_insert(data, header).subscribe((rest: any) => {
      if(rest.issuccess){
        Swal.fire({
          title: '¡Registro exitoso!',
          text: 'Su orden fue registrado correctamente',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          this.refresh();
        })
      }else{
        Swal.fire({
          title: 'Atención',
          text: 'Su solicitud no pudo ser procesada, favor verificar.',
          icon: 'warning',
          confirmButtonText: 'Ok'
        })

      }      
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

  patchValues(coordenada_Latitud: any, coordenada_Lontigitud: any, lugar_Muestreo: any, nombre_Punto: any){
    return this.fb.group({
      coordenada_Latitud: [coordenada_Latitud],
      coordenada_Lontigitud: [coordenada_Lontigitud],
      lugar_Muestreo: [lugar_Muestreo],
      nombre_Punto: [nombre_Punto]
    })
  }


  __onSubmit() {
    
    if (this.formCliente.valid) {
      
      const control = <FormArray>this.formServicio.get('lugaresMuestreo');
      this.personas.forEach(x =>{
        control.push(this.patchValues(x.coordenada_Latitud, x.coordenada_Lontigitud, x.lugar_Muestreo, x.nombre_Punto ));
      });
      console.log(this.formServicio.value);
      this.__insert(this.formServicio.value);

    } else {
      
      Swal.fire({
        title: 'Atención',
        text: 'Debe registrar todos los datos requeridos',
        icon: 'warning',
        confirmButtonText: 'Ok'
      }).then(() => {
        //this.refresh();
      })
    }
  }





  ngOnInit(): void {
    var token = sessionStorage.getItem('token');
    if(token == null){
      this.router.navigate(['logout']);
    }

  }
}



