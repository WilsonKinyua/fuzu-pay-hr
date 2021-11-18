import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Staff } from '../../shared/models/staff';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  sourceUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  // add new employee
  addStaff(employee: Staff) {
    return this.http.post(this.sourceUrl + '/human-resource/api/employees/', employee);
  }
}
