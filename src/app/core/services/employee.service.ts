import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Staff } from '../../shared/models/staff';
import { JobListing } from 'src/app/shared/models/job-listing';
import { Application } from 'src/app/shared/models/application';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  sourceUrl = 'https://machachari.herokuapp.com';
  
  constructor(private http: HttpClient) {}

  // add new employee
  addStaff(employee: Staff) {
    return this.http.post(this.sourceUrl + '/human-resource/api/employees/', employee);
  }
  // Add applicant
  addApplicant(applicant: JobListing) {
    return this.http.post(this.sourceUrl + '/human-resource/api/employees/', applicant);
  }

  // get all employees
  getAllEmployees() {
    return this.http.get(this.sourceUrl + '/human-resource/api/employees/');
  }

  // get new applicant
  getNewApplicant() {
    return this.http.get(this.sourceUrl + '/human-resource/api/employees/');
  
  }
}
