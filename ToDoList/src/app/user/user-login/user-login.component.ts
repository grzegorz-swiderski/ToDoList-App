import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  userLogin: string;
  userPassword: string;
  loginError: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])

  passwordFormControl = new FormControl('', [
    Validators.required,
  ])

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.authService.login(this.userLogin, this.userPassword)
      .then(user => {
        this.router.navigate(['./todo']);
      })
      .catch(err => {
        this.loginError = err.message;
      })
  }



}
