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

    // projectForm = this.fb.group({
    //   Usuario: ['', Validators.required],
    //   Contrasena: ['', Validators.required]

    // })

    __Login(data:any){
      
      this.ls.__be_login(data).subscribe((rest:any) => {        
        if(rest.issuccess){
          console.log(rest.Data.token)
          sessionStorage.setItem('token', rest.data.token);
          sessionStorage.setItem('user', rest.data.usuario);
          /* console.log("Usuario correcto"); */
          this.router.navigate(['home']);
        }else {
          console.log(rest);
          alert("Usuario inválido");
        }
      });
    }


    // __validarUser(user:any, pass:any){
    //   this.ls.__be_validar(user.Usuario, pass.Contrasena).subscribe((rest:any) => {
    //     if(rest.issuccess){
    //       /* console.log("Usuario correcto"); */
    //       this.router.navigate(['home']);
    //     }else {
    //       console.log(rest);
    //       alert("Usuario inválido");
    //     }
    //   });
    // }

    __onSubmit(){
      if(this.loginForm.valid){
        
        this.__Login(this.loginForm.value);
        
      } else {
        alert("Formulario no válido");
      }
    }
    
  ngOnInit(): void {
  }

  /* ingresar(){
    this.router.navigateByUrl('/home');
  }
 */
}
