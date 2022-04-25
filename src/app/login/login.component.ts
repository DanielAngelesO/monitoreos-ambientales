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
    private readonly ps: LoginService,
    private router: Router
  ){}

    projectForm = this.fb.group({
      Usuario: ['', Validators.required],
      Contrasena: ['', Validators.required]

    })


    __validarUser(user:any, pass:any){
      this.ps.__be_validar(user.Usuario, pass.Contrasena).subscribe((rest:any) => {
        if(rest.issuccess){
          /* console.log("Usuario correcto"); */
          this.router.navigate(['home']);
        }else {
          console.log(rest);
          alert("Usuario inválido");
        }
      });
    }

    __onSubmit(){
      if(this.projectForm.valid){
        this.__validarUser(this.projectForm.value, this.projectForm.value );
        
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
