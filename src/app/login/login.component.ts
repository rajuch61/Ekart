import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result) {
          localStorage.setItem('token', JSON.stringify(result));
          console.log(localStorage.getItem('token'));
          this.router.navigate(['/']);
        } else {
          this.invalidLogin = true;
        }
      });
  }

}
