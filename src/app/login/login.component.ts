import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { LoginService } from '../services/login/login.service';
import Swal from 'sweetalert2';

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
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bienvenido!',
            showConfirmButton: false,
            timer: 1500
          })
          sessionStorage.setItem('token', rest.data.token);
          sessionStorage.setItem('user', rest.data.usuario);
          sessionStorage.setItem('profile', rest.data.perfil);          
          
          this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
            this.router.navigate(['home'])
            window.location.reload()
          })
          
          
        }else {          
          Swal.fire({
            title: 'Atención',
            text: 'Usuario o contraseña inválidos',
            icon: 'warning',
            confirmButtonText: 'Ok'
          }).then(() => {
            //this.refresh();
          })          
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
