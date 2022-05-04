import { Component, OnInit } from '@angular/core';
import { DisparadorDataService } from 'src/app/services/Disparadores/disparador-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ignoreElements } from 'rxjs';
import { InformesService } from 'src/app/services/servicio-monitoreos/informes/informes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {


  CodigoServicio = '';
  Codigo_Lugar=0;
  lugares : any = [];
  lugaresparametros : any = [];
  parametro: any = [];
  parametro_existe: Boolean =true;
  parametro_nuevo: any = [{codigo_Lugar:0,
                           tipo_Parametro: '',
                           descripcion_Parametro:'',
                           unidad_Medida:'',
                           resultado_Medicion:''}] ;

  constructor(private disparate: DisparadorDataService,
              private fb: FormBuilder,
              private fb2: FormBuilder,
              private ps: InformesService,
              private router_devolucion: Router) { }

  C_Solicitud= this.fb.group({Solicitud:[0,Validators.required]})
  C_Parametro= this.fb.group({codigo_Lugar:[0,Validators.required],
                              tipo_Parametro:['',Validators.required],
                              descripcion_Parametro:['',Validators.required],
                              unidad_Medida:['',Validators.required],
                              resultado_Medicion:['',Validators.required]
                              })

  _obtenerSol(){
    this.CodigoServicio=(<FormGroup>this.C_Solicitud).get('Solicitud')?.value
    return this.CodigoServicio
}

__ConsultaServicio() {      

  console.log(this._obtenerSol())
  this.disparate.disparadorData.emit(this._obtenerSol());
  this._obtenerlugares(parseInt(this.CodigoServicio,10));

  
  
}

_obtenerlugares(sol: number){

  this.ps.__getObtenerLugares(sol).subscribe((rest:any)=>{
    if(rest.issuccess){
      this.lugares=rest.data;
      this.lugares.map((re: { checked: boolean; }) => {
        re.checked = false;
 })
      console.log(this.lugares)
    }
    else{
      alert("Solicitud no valida")
    }
    })

    this.ps.__getObtenerParametrosLugares(sol).subscribe((rest:any)=>{
      if(rest.issuccess){
        this.lugaresparametros=rest.data;
        console.log(this.lugaresparametros)
      }
      else{
        alert("No hay parametros aun")
      }
      })
}

_cambio($event: any){

  this.parametro_existe=false
  this.parametro=[]
  const id = $event.target.value;
  const ischecked= $event.target.checked;
  this.lugares.map((re: { checked: boolean; }) => {
    re.checked = false;})

  this.lugares[id].checked=ischecked
  this.Codigo_Lugar=parseInt(this.lugares[id].codigo_Muestreo,10)

  for(let item of this.lugaresparametros){

    if(this.lugares[id].codigo_Muestreo==item.codigo_Lugar){
      this.parametro=item
      this.parametro_existe=true
      
    }
  }
  console.log(this.parametro)
  
}

_EjecutarDevolucion()
{
  if(this.parametro_existe==false){
    if(this._obtenerSol()){  
      if(this.C_Parametro.valid){
          this.parametro_nuevo[0].codigo_Lugar=this.Codigo_Lugar;
          this.parametro_nuevo[0].tipo_Parametro=(<FormGroup>this.C_Parametro).get('tipo_Parametro')?.value;
          this.parametro_nuevo[0].descripcion_Parametro=(<FormGroup>this.C_Parametro).get('descripcion_Parametro')?.value;
          this.parametro_nuevo[0].unidad_Medida=(<FormGroup>this.C_Parametro).get('unidad_Medida')?.value;
          this.parametro_nuevo[0].resultado_Medicion=(<FormGroup>this.C_Parametro).get('resultado_Medicion')?.value;
          console.log(this.Codigo_Lugar)
          console.log(this.parametro_nuevo)
          this.ps._insertarnuevoparametro(this.parametro_nuevo).subscribe((rest:any)=>{
            if(rest.issuccess){
                 alert("Nuevo Parametro")
                 this.router_devolucion.navigate(['home'])
            }
            else{
                 alert(rest.errormessage);
            }
          })  
      }
    else{
      alert("Equipo no devuelto")
    }
    }
    else{
    alert("Elegir Solicitud")
    }

  }
  else{
    alert('No hay parametro nuevo')
  }

}

  ngOnInit(): void {
  }

}
