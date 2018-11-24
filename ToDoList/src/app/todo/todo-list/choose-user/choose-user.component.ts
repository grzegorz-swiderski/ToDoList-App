import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { NewUser } from '../../../models/newUser';
import { TasksService } from '../../../services/tasksService.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.css']
})
export class ChooseUserComponent {

  usersList: Array<User>;
  user = this.authService.user;

  constructor( public tasksService: TasksService, 
    private router: Router, 
    public authService: AuthService ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.tasksService.getUsers().subscribe((data: Array<User>) => {
      this.usersList = data;
    })
  }

  getNewUser(name, id){
    let newUser: NewUser = ({
      userId: id, userName: name
    })
    this.tasksService.getNewUser(newUser);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/user']);
  }

}
