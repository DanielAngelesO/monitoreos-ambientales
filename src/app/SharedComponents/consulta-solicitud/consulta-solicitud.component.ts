import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaMonitoreosService } from 'src/app/services/consultas/consulta-monitoreos/consulta-monitoreos.service';
import { DisparadorDataService } from 'src/app/services/Disparadores/disparador-data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-consulta-solicitud',
  templateUrl: './consulta-solicitud.component.html',
  styleUrls: ['./consulta-solicitud.component.css']
})
export class ConsultaSolicitudComponent implements OnInit {
  CodigoSolicitud = ''

  constructor(
    private fb: FormBuilder,
    private readonly ps: ConsultaMonitoreosService,
    private router: Router,
    private disparate: DisparadorDataService
  ) {    
    
  }

  __ConsultaSolicitud() {      
      this.disparate.disparadorData.emit(this.CodigoSolicitud);    
  }

  ngOnInit(): void {
  }

}
