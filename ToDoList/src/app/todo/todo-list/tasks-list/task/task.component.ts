import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AuthService } from '../../../../services/auth.service';
import { TasksService } from '../../../../services/tasksService.service';
import { Task } from '../../../../models/task';
import {CdkDragDrop, moveItemInArray, CdkDrag} from '@angular/cdk/drag-drop';

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
      this.tasksList = data
      .sort((a, b) : any => {
        return a.sort - b.sort;
      })
    })
  }

  getTasksList() {
    this.tasksService.getTasksList().subscribe((task) => {
      this.tasksList.push(task);
      task.sort = this.tasksList.length-1;
      this.tasksService.changeTask(task).subscribe();
    })
  }

  getTaskByUserId() {
    this.tasksService.getTaskByUserId(this.user.uid).subscribe(data => {
      this.tasksList = data
      .sort((a, b) : any => {
        return a.sort - b.sort;
      })
    })
  }

  getTaskByUserId2() {
    this.tasksService.sendNewUser().subscribe(user => {
      if(user.userName === "Admin"){
        return this.getTasks();
      }
      this.tasksService.getTaskByUserId(user.userId).subscribe(data => {
        this.tasksList = data
        .sort((a, b) : any => {
          return a.sort - b.sort;
        })
      })
    })
  }

  deleteTask(task: Task) {
    let id = task._id;
    this.tasksService.deleteTask(id).subscribe();
    this.tasksList = this.tasksList.filter(h => h !== task);

  }

  drop(event: CdkDragDrop<Array<Task>>) {
    moveItemInArray(this.tasksList, event.previousIndex, event.currentIndex);
    console.log(event.currentIndex);
    this.tasksList.forEach( (value, index) => {
      value.sort = index;
      this.tasksService.changeTask(value).subscribe();
    });
  }
}
