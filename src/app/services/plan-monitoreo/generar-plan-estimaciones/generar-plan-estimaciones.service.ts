import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerarPlanEstimacionesService {

  constructor(
    private readonly http: HttpClient
  ) { }


  _insertarplan(data: any ){
    
  return this.http.post<any>('https://localhost:44309/api/PlanProyecto/insert',data)
  }


  __getObtenersolicitud(params: any){
    return this.http.get('https://localhost:44309/api/OrdenServicio/listarPorCodigo?CodigoServicio='+params);}
}
