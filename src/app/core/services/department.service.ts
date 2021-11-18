import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  sourceUrl = 'http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }

  // get all departments
  getDepartments(){
    return this.http.get(`${this.sourceUrl}/human-resource/api/departments/`);
  }
}
