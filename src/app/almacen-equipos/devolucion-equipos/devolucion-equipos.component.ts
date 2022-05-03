import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ignoreElements } from 'rxjs';
import { DevolucionEquiposService } from 'src/app/services/almacen-equipos/devolucion-equipos/devolucion-equipos.service';
import { DisparadorDataService } from 'src/app/services/Disparadores/disparador-data.service';

@Component({
  selector: 'app-devolucion-equipos',
  templateUrl: './devolucion-equipos.component.html',
  styleUrls: ['./devolucion-equipos.component.css']
})
export class DevolucionEquiposComponent implements OnInit {

  equipos : any = [];
  CodigoServicio = '';
  equipos2: any = [{codigo_Solicitud:0,
                    equipo: ''}] ;

  

  constructor( private readonly ps: DevolucionEquiposService,
                private disparate: DisparadorDataService,
                private fb: FormBuilder,
                private fb2: FormBuilder,
                private router_devolucion: Router) { }
  
C_Solicitud= this.fb.group({
    Solicitud:[0,Validators.required]})


_obtenerSol(){
      this.CodigoServicio=(<FormGroup>this.C_Solicitud).get('Solicitud')?.value
      return this.CodigoServicio
  }

__ConsultaServicio() {      
      console.log(this._obtenerSol())
      this.disparate.disparadorData.emit(this._obtenerSol());
      this._obtenerEquipos(parseInt(this._obtenerSol(),10));
      
  }


_EjecutarDevolucion()
{
  if(this._obtenerSol()){
    
    if(this.C_Solicitud.valid){
      for( let item of this.equipos){

      if(item.estado_Devolucion==0 && item.checked==true ){
        this.equipos2[0].codigo_Solicitud=parseInt(this._obtenerSol(),10);
        this.equipos2[0].equipo=item.codigo_Equipo;
        console.log(this.equipos2)
        this.ps._devolucionequipos(this.equipos2).subscribe((rest:any)=>{
          if(rest.issuccess){
               alert("Equipos Devueltos")
               this.router_devolucion.navigate(['home'])
          }
          else{
               alert(rest.errormessage);
          }
        })
      }


      }
      
    }
  else{
    alert("Equipo no devuelto")
  }
  }
  else{
  alert("Elegir Solicitud")
  }
}


  _obtenerEquipos(sol: number){

    this.ps.__getObtenerequipos(sol).subscribe((rest:any)=>{
      if(rest.issuccess){
        this.equipos=rest.data;
        this._conviertiendo()

      }
      else{
        alert("Solicitud no valida")
      }
      })
  }

  _conviertiendo(){

    this.equipos.map((re: { checked: boolean; }) => {
           re.checked = false;
    })
    for(let item of this.equipos){
      if(item.estado_Devolucion==1){
        item.checked=true
      }
      else{
        item.checked=false
      }
    }
  
  }

  
  _cambio($event: any){

    const id = $event.target.value;
    const ischecked= $event.target.checked;
    this.equipos[id].checked=ischecked
    
  }
  ngOnInit(): void {

    
  }

}
