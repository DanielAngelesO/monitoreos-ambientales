import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerarPlanEstimacionesService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getGenerarPlanEstimaciones(){
    return this.http.get('');}
}
