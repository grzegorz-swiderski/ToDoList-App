import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksService } from './services/tasksService.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserComponent } from './user/user.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TaskDescriptionComponent } from './todo/todo-list/task-description/task-description.component';
import { TasksListComponent } from './todo/todo-list/tasks-list/tasks-list.component';
import { TaskComponent } from './todo/todo-list/tasks-list/task/task.component';
import { EditTaskComponent } from './todo/todo-list/tasks-list/edit-task/edit-task.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatDialogModule, MatCardModule, MatNativeDateModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/authGuard.service';
import { ChooseUserComponent } from './todo/todo-list/choose-user/choose-user.component';
import { NavbarComponent } from './todo/navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
import { UserPanelComponent } from './todo/user-panel/user-panel.component';
import { TaskTableComponent } from './todo/todo-list/task-table/task-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserComponent,
    TodoListComponent,
    TaskDescriptionComponent,
    TasksListComponent,
    TaskComponent,
    EditTaskComponent,
    ChooseUserComponent,
    NavbarComponent,
    TodoComponent,
    UserPanelComponent,
    TaskTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [TasksService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
