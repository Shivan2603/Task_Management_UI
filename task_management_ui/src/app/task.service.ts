import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppTask } from './models/task.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<AppTask[]> {
    return this.http.get<AppTask[]>(this.apiUrl);
  }

  getTask(id: number): Observable<AppTask> {
    return this.http.get<AppTask>(`${this.apiUrl}/${id}`);
  }

  createTask(task: AppTask): Observable<AppTask> {
    return this.http.post<AppTask>(this.apiUrl, task);
  }

  updateTask(task: AppTask): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}