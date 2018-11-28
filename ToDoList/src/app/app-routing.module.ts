import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './todo/todo-list/tasks-list/edit-task/edit-task.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserComponent } from './user/user.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TasksListComponent } from './todo/todo-list/tasks-list/tasks-list.component';
import { AuthGuardService } from './services/authGuard.service';
import { TaskDescriptionComponent } from './todo/todo-list/task-description/task-description.component';
import { TaskComponent } from './todo/todo-list/tasks-list/task/task.component';
import { TodoComponent } from './todo/todo.component';
import { UserPanelComponent } from './todo/user-panel/user-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent, children:
      [
        { path: '', component: UserLoginComponent },
        { path: 'login', component: UserLoginComponent },
        { path: 'registration', component: UserRegistrationComponent }
      ],
  },
  {
    path: 'todo', component: TodoComponent, canActivate: [AuthGuardService ],  children:
      [
        { path: '', redirectTo: 'todoList', pathMatch: 'full' },
        {
          path: 'todoList', component: TodoListComponent, children:
            [
              { path: '', redirectTo: 'tasksList', pathMatch: 'full' },
              {
                path: 'tasksList', component: TasksListComponent, children:
                  [
                    { path: '', component: TaskComponent },
                    { path: 'task', component: TaskComponent },
                    { path: ':id', component: EditTaskComponent }
                  ]
              },
            ]
        },
        { path: 'userPanel', component: UserPanelComponent }
      ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
