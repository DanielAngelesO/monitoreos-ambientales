import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService) {

    _CargaScripts.Carga(["registro"])
   }

  ngOnInit() {
    
    
  }
}

