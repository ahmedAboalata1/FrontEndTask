import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  constructor(private http  : HttpClient) { }

  baseUrl = 'https://localhost:44386/api' ;
  getTasks() {
    return this.http.get(`${this.baseUrl}/Tasks`);
  }
}
