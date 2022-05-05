import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AprobacionSolicitudEquiposService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getAprobacion(cod_Solcitud: any){
    return this.http.get('https://localhost:44309/api/EquiposProyecto/Aprobar?CodigoSolicitud=' + cod_Solcitud);
  }
}
