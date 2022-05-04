import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudEquiposService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getSolicitud(){
    return this.http.get('');
  }
  
}
