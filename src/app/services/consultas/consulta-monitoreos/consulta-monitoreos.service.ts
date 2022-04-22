import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMonitoreosService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getConsulta(){
    return this.http.get('');
  }
}
