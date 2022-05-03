import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { ConsultaMonitoreosService } from 'src/app/services/consultas/consulta-monitoreos/consulta-monitoreos.service';
import { DisparadorDataService } from 'src/app/services/Disparadores/disparador-data.service';

@Component({
  selector: 'app-informacion-proyecto',
  templateUrl: './informacion-proyecto.component.html',
  styleUrls: ['./informacion-proyecto.component.css']
})
export class InformacionProyectoComponent implements OnInit {
  proyecto: any;

  constructor(
    private readonly ps: ConsultaMonitoreosService,
    private router: Router,
    private disparate: DisparadorDataService,
    private _cargarScripts: CargarScriptsService
  ) {
    this._cargarScripts.Carga(["registro"])
   }

  ngOnInit(): void {
    this.disparate.disparadorDetalleProyecto.subscribe(data => {      
      this.ps.ObtenerProyecto(data).subscribe((rest: any) => {
        this.proyecto = rest.data;
        console.log(this.proyecto);

        //var lista = document.getElementById('profile-feed-1');
        

      })
    })
    
  }

}
