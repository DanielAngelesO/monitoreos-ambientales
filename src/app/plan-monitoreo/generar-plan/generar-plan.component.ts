import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerarPlanEstimacionesService } from 'src/app/services/plan-monitoreo/generar-plan-estimaciones/generar-plan-estimaciones.service';
import { DisparadorDataService } from 'src/app/services/Disparadores/disparador-data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-generar-plan',
  templateUrl: './generar-plan.component.html',
  styleUrls: ['./generar-plan.component.css']
})
export class GenerarPlanComponent implements OnInit {

  proyecto: any = [];
  solicitud_plan: number = 0;
  CodigoServicio = '';

  constructor(
    private fb: FormBuilder,
    private fb2: FormBuilder,
    private readonly pp: GenerarPlanEstimacionesService,
    private readonly pp2: GenerarPlanEstimacionesService,
    private router_solicitud_equipos: Router,
    private disparate: DisparadorDataService
  ) { }

  C_Solicitud= this.fb.group({
    Solicitud:[0,Validators.required]
  })

  C_Plan= this.fb2.group({
    codigo_Solicitud:[this.solicitud_plan,Validators.required],
    fecha_Inicio:['',Validators.required],
    fecha_Fin:['',Validators.required],
    dias_Monitoreo:[0,Validators.required],
    cantidad_Analista:[0,Validators.required],
    monto_Viaticos:[0,Validators.required],
    precio_Final_Servicio:[0,Validators.required]

  })

  _obtenerProyecto(sol: number){

    this.pp.__getObtenersolicitud(sol).subscribe((rest:any)=>{
      if(rest.issuccess){
        this.proyecto=rest.data
        this.solicitud_plan=parseInt(this.proyecto[0].codigo_Solicitud,10)

        console.log(this.proyecto);
        this.C_Plan= this.fb2.group({
          codigo_Solicitud:[this.solicitud_plan,Validators.required],
          fecha_Inicio:['',Validators.required],
          fecha_Fin:['',Validators.required],
          dias_Monitoreo:[0,Validators.required],
          cantidad_Analista:[0,Validators.required],
          monto_Viaticos:[0,Validators.required],
         precio_Final_Servicio:[0,Validators.required]
        }
        )
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Solicitud no valida',
          footer: '<a href="">Por favor corregir</a>'
        })
      }
      })
  }
  _insertarplan(data: any){
    this.pp2._insertarplan(data).subscribe((rest:any)=>{
        if(rest.issuccess){
          Swal.fire({
            title: 'Registro',
            text: "Plan generado con solicitud "+this.proyecto[0].codigo_Solicitud,
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(() => {
            this.refresh();
          })
        }
        else{
             alert(rest.errormessage)
        }

    })
  }

  _obtenerSol(){
    console.log((<FormGroup>this.C_Solicitud).get('Solicitud')?.value)
    return (<FormGroup>this.C_Solicitud).get('Solicitud')?.value
  }

  _Busqueda(){
    if(this.C_Solicitud.valid){
        this._obtenerProyecto(this._obtenerSol())

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Solicitud no valida',
        footer: '<a href="">Por favor corregir</a>'
      })
    }
  }

  __ConsultaServicio() {      
    this.disparate.disparadorData.emit(this._obtenerSol());
    this._obtenerProyecto(this._obtenerSol());    
}


  _GuardarPlan(){
 
   if((<FormGroup>this.C_Plan.get('codigo_Solicitud')?.value)){
    console.log(this.C_Plan.value)
    if(this.C_Plan.valid){
      this._insertarplan(this.C_Plan.value);
    }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Plan no guardado',
      footer: '<a href="">Por favor corregir</a>'
    })
  }
  }
  else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Elegir Solicitud',
    footer: '<a href="">Por favor corregir</a>'
  })
  }
  }

  refresh(): void {
    window.location.reload();
  }
  ngOnInit(): void {

  
  }

}
