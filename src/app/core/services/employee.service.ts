import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Staff } from '../../shared/models/staff';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  sourceUrl = 'https://fuzupay-hr.herokuapp.com';

  constructor(private http: HttpClient) {}

  // add new employee
  addStaff(employee: Staff) {
    return this.http.post(this.sourceUrl + '/human-resource/api/employees/', employee);
  }

  // get all employees
  getAllEmployees() {
    return this.http.get(this.sourceUrl + '/human-resource/api/employees/');
  }
}
