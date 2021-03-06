import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private readonly http: HttpClient
  ) { }

  


  json = {
    "issuccess": true,
    "errorCode": "0001",
    "errorMessage": "Cannot open database \"BD_SMA\" requested by the login. The login failed.\r\nLogin failed for user 'db-sma'.",
    "data": null
  }

  __be_login(data: any){    
    return this.http.post<any>('https://localhost:44309/api/User/Validar', data)
  }

  __be_insert(data: any){
  }

  __be_validar(user:any, pass:any){

    var url = 'https://localhost:44309/api/User/Validar?Usuario='+ user + '&Password=' + pass;
    console.log(url);
    return this.http.get<any>(url);
    
  }
}
