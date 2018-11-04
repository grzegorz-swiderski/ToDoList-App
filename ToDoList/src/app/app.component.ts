import { Component } from '@angular/core';
import { TasksService } from './services/tasksService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private tasksService: TasksService) { }

}

