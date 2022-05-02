import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMonitoreosService {

  constructor(
    private readonly http: HttpClient
  ) { }


  ConsultarServicios(){
    return this.http.get('https://localhost:44309/api/OrdenServicio/listar');
  }

  ConsultarServiciosPorCodigo(data: any){
    return this.http.get('https://localhost:44309/api/OrdenServicio/listarPorCodigo?CodigoServicio=' + data);
  }

  ConsultarServiciosPorNombre(data: any){
    return this.http.get('https://localhost:44309/api/OrdenServicio/listarPorCliente?NombreCliente=' + data);
  }

  ObtenerProyecto(data: any){
    return this.http.get('https://localhost:44309/api/OrdenServicio/ObtenerProyecto?CodigoServicio=' + data);
  }


}
