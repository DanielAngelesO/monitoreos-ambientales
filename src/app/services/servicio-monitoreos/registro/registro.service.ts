import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

   

  constructor(
    private readonly http: HttpClient
  ) { }


  __getRegistro(){
    return this.http.get('');
  }

  __be_insert(data:any){
    console.log(data);
    return data;

    
   /*  const headers = { 'content-type': 'application/json'} */
   /*  return this.http.post('https://localhost:44309/api/Clientes/GuardarCliente', data); */
  }

}
