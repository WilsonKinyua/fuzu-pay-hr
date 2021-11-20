import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Staff } from '../../shared/models/staff';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  sourceUrl = 'https://machachari.herokuapp.com';

  constructor(private http: HttpClient) {}

  // add new employee
  addStaff(employee: Staff) {
    return this.http.post(
      this.sourceUrl + '/human-resource/api/employees/',
      employee
    );
  }

  // get all employees
  getAllEmployees() {
    return this.http.get(this.sourceUrl + '/human-resource/api/employees/');
  }

  // get employee by id
  getEmployeeById(employee_id: string) {
    return this.http.get(
      this.sourceUrl + '/human-resource/api/employees/' + employee_id + '/'
    );
  }
}
