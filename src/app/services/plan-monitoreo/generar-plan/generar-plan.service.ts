import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerarPlanService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getGenerarPlann(){
    return this.http.get('');
  }
}
