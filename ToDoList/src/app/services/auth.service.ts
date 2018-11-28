import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { TasksService } from './tasksService.service';
import { NewUser } from '../models/newUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(
    private tasksService: TasksService,
    private angularFire: AngularFireAuth,
    private router: Router) {
    angularFire.authState.subscribe(user => {
      this.user = user;
      console.log(user);
    })
  }

  login(email: string, password: string) {
    return this.angularFire.auth.signInWithEmailAndPassword(email, password);
  }

  registration(name: string, email: string, password: string, status: string) {
    return this.angularFire.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.angularFire.auth.currentUser.updateProfile({
          displayName: name,
          photoURL: ''
        })
      })
      .then(user => {
        this.angularFire.authState.subscribe(user => {
          let newUser: NewUser = ({ userId: user.uid, userName: name });
          this.tasksService.sendUser(newUser).subscribe()
        })
      })
  }

  logout() {
    this.angularFire.auth.signOut()
      .then(user => {
        console.log(user);
      })
  }


}
