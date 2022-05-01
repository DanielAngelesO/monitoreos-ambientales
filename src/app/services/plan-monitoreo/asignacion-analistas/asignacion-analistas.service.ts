import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignacionAnalistasService {

  constructor(
    private readonly http: HttpClient,
    
  ) { }




  __getAsignacion() {
    return this.http.get('');
  }

  

  __be_insert(data: any) {
    console.log(data);
    return data;
    

   /*   const headers = { 'content-type': 'application/json'}
     return this.http.post('https://localhost:44309/api/AnalistaPoryecto/insert', data, {headers}); */
  }

}
