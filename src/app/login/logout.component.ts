import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor( 
    private router: Router
  ) { }

  ngOnInit(): void {
      sessionStorage.clear();
      this.router.navigateByUrl('/login', { skipLocationChange: false }).then(() => {
        this.router.navigate(['login'])
        window.location.reload()
      })
  }
}
