import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Staff } from '../../shared/models/staff';
import { JobListing } from 'src/app/shared/models/job-listing';
import { Application } from 'src/app/shared/models/application';
import { InterviewSchedule } from '../../shared/models/interview-schedule';
import { Job } from '../../shared/models/job';
import { GetUserTokenService } from './get-user-token.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  sourceUrl = environment.sourceUrl;
  deployedUrl = 'https://fuzupay-hr.herokuapp.com';

  constructor(
    private http: HttpClient,
    private userTokenService: GetUserTokenService
  ) {}

  // add new employee
  addStaff(employee: Staff) {
    return this.http.post(this.sourceUrl + '/account/register/', employee, {
      headers: {
        Authorization: 'Token ' + this.userTokenService.getUserToken(),
      },
    });
  }

  // upload employee
  addStaffViaUpload(employee: any) {
    return this.http.post(this.sourceUrl + '/account/register/', employee, {
      headers: {
        Authorization: 'Token ' + this.userTokenService.getUserToken(),
      },
    });
  }

  // Add applicant
  addApplicant(applicant: JobListing) {
    return this.http.post(
      this.sourceUrl + '/human-resource/api/employees/',
      applicant
    );
  }


  // get all employees
  getAllEmployees() {
    return this.http.get(this.sourceUrl + '/human-resource/api/employees/');
  }
  getNewApplicant() {
    return this.http.get(
      this.deployedUrl + '/human-resource/api/applications/new/'
    );
  }
  getPastApplicant() {
    return this.http.get(this.deployedUrl + '/human-resource/api/applications/');
  }

  // get employee by id
  getEmployeeById(employee_id: string) {
    return this.http.get(
      this.sourceUrl + '/human-resource/api/employees/' + employee_id + '/'
    );
  }

  // get one applicant
  getOneApplicant(id: Application) {
    return this.http.get(
      this.deployedUrl + '/human-resource/api/applications/' + id + '/'
    );
  }
  // get interviews

  getActiveInter() {
    return this.http.get(
      this.sourceUrl + '/human-resource/api/active/interviews/'
    );
  }
  getPastInter() {
    return this.http.get(
      this.sourceUrl + '/human-resource/api/past/interviews/'
    );
  }
  // schedule interviews
  scheduleInterview(schedule: InterviewSchedule) {
    return this.http.post(
      this.sourceUrl + '​/human-resource​/api​/schedule-interview​/',
      schedule
    );
  }
  // get department details
  getDepartmentDetails() {
    return this.http.get(this.sourceUrl + '/human-resource/api/departments/');
  }
}
