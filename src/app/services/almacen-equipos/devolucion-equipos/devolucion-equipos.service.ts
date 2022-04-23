import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevolucionEquiposService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getDevolucion(){
    return this.http.get('');
  }
}
