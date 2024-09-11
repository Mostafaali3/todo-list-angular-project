import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
url ="http://localhost:3000/"
  constructor(private http : HttpClient) { }

  getAllData():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.url}posts`)
  }
}
