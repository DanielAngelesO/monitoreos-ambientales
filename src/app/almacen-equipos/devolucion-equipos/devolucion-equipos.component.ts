import { Component, OnInit } from '@angular/core';
import { DevolucionEquiposService } from 'src/app/services/almacen-equipos/devolucion-equipos/devolucion-equipos.service';

@Component({
  selector: 'app-devolucion-equipos',
  templateUrl: './devolucion-equipos.component.html',
  styleUrls: ['./devolucion-equipos.component.css']
})
export class DevolucionEquiposComponent implements OnInit {

  equipos : any = [];

  constructor( private readonly ps: DevolucionEquiposService) { }

  _Obtener_Servicios(){
    this.ps.__getDevolucion().subscribe((rest: any)=> {
      this.equipos=rest;
      console.log(this.equipos);
    })
  }

  ngOnInit(): void {
    this._Obtener_Servicios();
  }

}
