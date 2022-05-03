import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevolucionEquiposService {

  constructor(
    private readonly http: HttpClient
  ) { }


    _devolucionequipos(data: any ){
    
      return this.http.post<any>('https://localhost:44309/api/EquiposProyecto/ActualizarDevolucion',data)
      }

  __getObtenerequipos(params: any){
    return this.http.get('https://localhost:44309/api/EquiposProyecto/listarxcodigo_solicitud?Codigo_Solicitud='+params);}
}
