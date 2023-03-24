import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl: string = "http://localhost:3000/task" 

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(this.baseUrl)
  }

  persistTask(data: Task) {
    return this.http.post<Task>(this.baseUrl, data)
  }

  getTask(id: number | undefined) {
    return this.http.get<Task>(`${this.baseUrl}/${id}`)
  }

  putTask(id: number | undefined, data: Task) {
    return this.http.put<Task>(`${this.baseUrl}/${id}`, data)
  }

  deleteTask(id: number | undefined) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
  patchTaskStatus(id: number | undefined, data: Task) {  // <-- include data object as argument
    return this.http.put<Task>(`${this.baseUrl}/${id}`, data);  // <-- pass data object to patch method
  }
}
