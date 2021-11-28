import { HttpClient,HttpParams } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/models/department';
import { Staff } from 'src/app/shared/models/staff';


@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  sourceUrl = environment.sourceUrl;
  constructor(private http: HttpClient) {}

  // get all departments
  getDepartments() {
    return this.http.get(`${this.sourceUrl}/human-resource/api/departments/`);}
  // add new department
  addDepartment(department: Department) {
    return this.http.post(this.sourceUrl + '/human-resource/api/departments/',
      department
    );
  }
  // get a list of employees in a specific department
  getEmployeesByDepartments(selectedDepartmentId :number):Observable<any>
  {
    let params1 = new HttpParams().set('department',selectedDepartmentId);
    return this.http.get(this.sourceUrl + '/human-resource/api/employees/',{params:params1});
  }

}