import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TASKS } from '../components/mock-tasks';
import { Task } from '../components/Task';


let headers = {headers: new HttpHeaders({
  'Content-Type': 'application/json'
})} 

@Injectable({
  providedIn: 'root'
})


export class TasksService {
 
  apiUrl = 'http://localhost:5000/tasks'


  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  
  }
  updateReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, headers )
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task)
  }
}
