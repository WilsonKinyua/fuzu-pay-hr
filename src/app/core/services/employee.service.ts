import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Staff } from '../../shared/models/staff';
import { JobListing } from 'src/app/shared/models/job-listing';
import { Application } from 'src/app/shared/models/application';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  sourceUrl = environment.sourceUrl;

  constructor(private http: HttpClient) {}

  // add new employee
  addStaff(employee: Staff) {
    return this.http.post(
      this.sourceUrl + '/human-resource/api/employees/',
      employee
    );
  }
  // Add applicant
  addApplicant(applicant: JobListing) {
    return this.http.post(this.sourceUrl + '/human-resource/api/employees/', applicant);
  }

  // get all employees
  getAllEmployees() {
    return this.http.get(this.sourceUrl + '/human-resource/api/employees/');
  }
  getNewApplicant(){
    return this.http.get(this.sourceUrl + '/human-resource/api/applications/new/')
  }
  getPastApplicant(){
    return this.http.get(this.sourceUrl + '/human-resource/api/applications/')
  }

  // get employee by id
  getEmployeeById(employee_id: string) {
    return this.http.get(
      this.sourceUrl + '/human-resource/api/employees/' + employee_id + '/'
    );
  }

  // get one applicant

  getOneApplicant(id:Application){
    return this.http.get(this.sourceUrl + '/human-resource/api/applications/' + id  + '/' );
  } 
}
