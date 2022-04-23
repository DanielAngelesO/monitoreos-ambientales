import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AprobacionSolicitudEquiposService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getAprobacion(){
    return this.http.get('');
  }
}
