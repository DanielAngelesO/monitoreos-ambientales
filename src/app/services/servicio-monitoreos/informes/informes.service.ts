import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformesService {

  constructor(
    private readonly http: HttpClient
  ) { }


  __getInformes(){
    return this.http.get('');
  }
}
