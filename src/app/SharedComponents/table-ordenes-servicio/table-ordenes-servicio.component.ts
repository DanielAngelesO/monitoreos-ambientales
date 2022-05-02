import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaMonitoreosService } from 'src/app/services/consultas/consulta-monitoreos/consulta-monitoreos.service';
import { DisparadorDataService } from 'src/app/services/Disparadores/disparador-data.service';



@Component({
  selector: 'app-table-ordenes-servicio',
  templateUrl: './table-ordenes-servicio.component.html',
  styleUrls: ['./table-ordenes-servicio.component.css']
})
export class TableOrdenesServicioComponent implements OnInit {

  servicios: any;

  constructor(
    //private fb: FormBuilder,
    private readonly ps: ConsultaMonitoreosService,
    private router: Router,
    private disparate: DisparadorDataService
  ) { }

  __VerProyecto(Codigo: any){
    this.disparate.disparadorDetalleProyecto.emit(Codigo);
  }

  ngOnInit(): void {
    //this.ListarServicios();
    this.disparate.disparadorData.subscribe(data => {
      console.log("recibiendo data...", data, typeof data);

      if(!isNaN(data) && data != '' ){
        this.ps.ConsultarServiciosPorCodigo(data).subscribe((rest: any) => {
          this.servicios = rest.data;
          console.log(this.servicios);      
        })
      }else{
        if(data == ''){
          this.ps.ConsultarServicios().subscribe((rest: any) => {
            this.servicios = rest.data;
            console.log(this.servicios);      
          }) 
        }else{
          this.ps.ConsultarServiciosPorNombre(data).subscribe((rest: any) => {
            this.servicios = rest.data;
            console.log(this.servicios);      
          })
        }
      }
    })
  }

}
