import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasksService.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.css']
})
export class TaskDescriptionComponent implements OnInit {

  newTask: string;
  newStatus: string;
  taskToSend: Task;

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  addNewTask() {
    let task: Task = ({ 
      userName: this.authService.user.displayName, 
      userId: this.authService.user.uid, 
      text: this.newTask, 
      status: "Ready" });
    if (task.text) {
      this.tasksService.postTask(task).subscribe((task) => {
        this.taskToSend = task;
        this.tasksService.sendTask(this.taskToSend);
        console.log(task);
      });
      this.newTask = "";
      this.newTask = ""; 
    }
  }
}
