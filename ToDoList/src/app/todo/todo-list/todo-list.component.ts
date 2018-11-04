import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasksService.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private router: Router,
    private tasksService: TasksService,
    private authService: AuthService) { }


 
}
