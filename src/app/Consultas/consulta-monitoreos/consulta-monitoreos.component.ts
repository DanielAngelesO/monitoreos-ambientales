import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaMonitoreosService } from 'src/app/services/consultas/consulta-monitoreos/consulta-monitoreos.service';
import { DisparadorDataService } from 'src/app/services/Disparadores/disparador-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulta-monitoreos',
  templateUrl: './consulta-monitoreos.component.html',
  styleUrls: ['./consulta-monitoreos.component.css']
})
export class ConsultaMonitoreosComponent implements OnInit {

  CodigoServicio = ''

  constructor(
    private fb: FormBuilder,
    private readonly ps: ConsultaMonitoreosService,
    private router: Router,
    private disparate: DisparadorDataService
  ) {    
    
  }

  __ConsultaServicio() {      
      this.disparate.disparadorData.emit(this.CodigoServicio);    
  }

  __ConsultaDetalleProyecto(){
      this.disparate.disparadorDetalleProyecto.emit(1002);
  }

  ngOnInit(): void {
  }

}
