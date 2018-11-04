import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TasksService } from '../services/tasksService.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
})
export class UserComponent {

  constructor( private tasksService: TasksService, private router: Router) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
}
