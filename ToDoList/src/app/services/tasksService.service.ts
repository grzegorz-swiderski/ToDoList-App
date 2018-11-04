import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Task } from '../models/task';
import { NewUser } from 'src/app/models/newUser';
import { development } from '../environment/development';
import { User } from 'firebase';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private taskToSend = new Subject<Task>();
  private userToSend = new Subject<NewUser>();
 
  constructor( private http: HttpClient ){ }

  postTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${development.apiUrl}/tasks/add`, task);
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${development.apiUrl}/tasks`);
  }

  getTask(id): Observable<Task> {
    return this.http.get<Task>(`${development.apiUrl}/tasks/` + id);
  }

  getTaskByUserId(userId): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${development.apiUrl}/tasks/get/` + userId);
  }

  changeTask(task): Observable<Task> {
    let id = task._id;
    return this.http.post<Task>(`${development.apiUrl}/tasks/update/` + id, task);
  }

  deleteTask(id): Observable<Task> {
    return this.http.get<Task>(`${development.apiUrl}/tasks/delete/` + id);
  }

  sendTask(taskToSend: Task) {
    this.taskToSend.next(taskToSend);
  }

  getTasksList(): Observable<Task> {
    return this.taskToSend.asObservable();
  }

  sendUser(user): Observable<User>{
    return this.http.post<User>(`${development.apiUrl}/users/add`, user);
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${development.apiUrl}/users`);
  }

  getNewUser(newUser: NewUser){
    this.userToSend.next(newUser);
  }

  sendNewUser(): Observable<NewUser>{
    return this.userToSend.asObservable();
  }

}