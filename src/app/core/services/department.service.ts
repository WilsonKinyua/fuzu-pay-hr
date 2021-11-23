import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  sourceUrl = 'https://fuzupay-hr.herokuapp.com';

  constructor(private http:HttpClient) { }

  // get all departments
  getDepartments(){
    return this.http.get(`${this.sourceUrl}/human-resource/api/departments/`);
  }
}
