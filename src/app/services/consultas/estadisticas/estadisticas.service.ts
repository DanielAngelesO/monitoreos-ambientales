import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getEstadistica(){
    return this.http.get('');
  }
}
