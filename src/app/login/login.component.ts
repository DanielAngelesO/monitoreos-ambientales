import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { LoginService } from '../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

  /* constructor( private router: Router) { } */

  constructor(
    private fb: FormBuilder,
    private readonly ls: LoginService,
    private router: Router
  ){}

  loginForm = this.fb.group({
    Usuario: ['', Validators.required],
    Password: ['', Validators.required]
  })

    __Login(data:any){
      
      this.ls.__be_login(data).subscribe((rest:any) => {
        console.log(rest);
        if(rest.issuccess){          
          sessionStorage.setItem('token', rest.data.token);
          sessionStorage.setItem('user', rest.data.usuario);
          sessionStorage.setItem('profile', rest.data.perfil);
          /* console.log("Usuario correcto"); */
          
          this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
            this.router.navigate(['home'])
            window.location.reload()
          })
          
          
        }else {          
          alert("Usuario inválido");
        }
      });
    }


    __onSubmit(){
      if(this.loginForm.valid){
        
        this.__Login(this.loginForm.value);
        
      } else {
        alert("Formulario no válido");
      }
    }
    
  ngOnInit(): void {
    
  }


}
