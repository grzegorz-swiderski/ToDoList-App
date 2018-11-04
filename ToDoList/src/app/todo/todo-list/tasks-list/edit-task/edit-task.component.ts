import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasksService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  id: String;
  task: Task;
  statuses: string[];
  usersList: Array<User>;

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.tasksService.getTask(this.id).subscribe(task => {
      this.task = task;
    });
    if (this.authService.user.displayName === 'Admin') {
      this.statuses = ['Ready', 'Work', 'Test', 'Done'];
    } else {
      this.statuses = ['Ready', 'Work', 'Test'];
    }
  }

  getUsers() {
    this.tasksService.getUsers().subscribe((data: Array<User>) => {
      this.usersList = data;
    })
  }

  changeTask() {
    let task: Task = ({
      _id: this.task._id,
      userName: this.task.userName,
      userId: this.task.userId,
      text: this.task.text,
      status: this.task.status
    });
    this.tasksService.changeTask(task).subscribe();
    alert("Change saved!");
    console.log(task);
  }

  userIdForChange(id) {
    this.task.userId = id;
  }

}
