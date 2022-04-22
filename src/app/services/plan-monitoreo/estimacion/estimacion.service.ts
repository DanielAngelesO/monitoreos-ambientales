import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstimacionService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getEstimacion(){
    return this.http.get('');
  }
}
