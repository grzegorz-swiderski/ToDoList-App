import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AuthService } from '../../../../services/auth.service';
import { TasksService } from '../../../../services/tasksService.service';
import { Task } from '../../../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasksList: Array<Task>;
  task: Task;
  user = this.authService.user;
  usersList: Array<User>;

  constructor( public tasksService: TasksService, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.getTasksList();
    this.getTaskByUserId2();
    if (this.user.displayName === 'Admin') {
      this.getTasks();
    } else {
      this.getTaskByUserId();
    }
  }

  getTasks() {
    this.tasksService.getTasks().subscribe((data: Array<Task>) => {
      this.tasksList = data;
      console.log(data);
    })
  }

  getTasksList() {
    this.tasksService.getTasksList().subscribe((data) => {
      this.tasksList.push(data);
    })
  }

  getTaskByUserId() {
    this.tasksService.getTaskByUserId(this.user.uid).subscribe(task => {
      this.tasksList = task;
    })
  }

  getTaskByUserId2() {
    this.tasksService.sendNewUser().subscribe(user => {
      if(user.userName === "Admin"){
        return this.getTasks();
      }
      this.tasksService.getTaskByUserId(user.userId).subscribe(task => {
        this.tasksList = task;
      })
    })
  }

  deleteTask(task: Task) {
    let id = task._id;
    this.tasksService.deleteTask(id).subscribe(task => {
      console.log(task);
    });
    this.tasksList = this.tasksList.filter(h => h !== task);

  }

}
