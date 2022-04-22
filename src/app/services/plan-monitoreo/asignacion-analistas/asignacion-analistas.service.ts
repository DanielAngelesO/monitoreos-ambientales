import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignacionAnalistasService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getAsignacion(){
    return this.http.get('');}
}
