import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userName: string;
  userEmail: string;
  userPassword: string;
  userStatus: string;
  userStatuses: string[] = ['Custom', 'Admin'];
  singUpError: string;

  nameFormControl = new FormControl('', [
    Validators.required,
  ])

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])

  passwordFormControl = new FormControl('', [
    Validators.required,
  ])

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  registration() {
    this.authService.registration(this.userName, this.userEmail, this.userPassword, this.userStatus)
      .then(user => {
        this.userName = '';
        this.userEmail = '';
        this.userPassword = '';
        alert("Your user was create. You can login!");
        this.router.navigate(['/user']);
      })
      .catch(err => {
        this.singUpError = err.message;
      })
  }


}
