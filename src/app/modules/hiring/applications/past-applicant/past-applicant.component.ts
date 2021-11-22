import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-past-applicant',
  templateUrl: './past-applicant.component.html',
  styleUrls: ['./past-applicant.component.css']
})
export class PastApplicantComponent implements OnInit {

  jobListing;
  isLoading = false;

  constructor(private employeeService: EmployeeService) {}

   // get all Applicants
   getApplicants() {
    this.isLoading = true;
    this.employeeService.getNewApplicant().subscribe(
      (res) => {
        console.log(res);
        this.jobListing = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.getApplicants();
  }

}
