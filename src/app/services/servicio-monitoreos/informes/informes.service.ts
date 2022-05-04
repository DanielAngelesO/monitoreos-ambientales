import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  __getObtenerLugares(params: any){
    return this.http.get('https://localhost:44309/api/LugaresMuestreo/ListarPorServicio?Cod_Orden='+params);}
  
    __getObtenerParametrosLugares(params: any){
      return this.http.get('https://localhost:44309/api/Parametros/ListarPorServicio?CodigoSolicitud='+params);}

    _insertarnuevoparametro(data: any ){
    
        return this.http.post<any>('https://localhost:44309/api/Parametros/insert',data)
        }


}
