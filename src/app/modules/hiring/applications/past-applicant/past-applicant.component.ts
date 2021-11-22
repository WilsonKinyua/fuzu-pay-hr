import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-past-applicant',
  templateUrl: './past-applicant.component.html',
  styleUrls: ['./past-applicant.component.css']
})
export class PastApplicantComponent implements OnInit {

  pastApplicant;
  isLoading = false;

  constructor(private employeeService: EmployeeService) {}

   // get all Applicants
   getPastApplicants() {
    this.isLoading = true;
    this.employeeService.getPastApplicant().subscribe(
      (res) => {
        console.log(res);
        this.pastApplicant = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.getPastApplicants();
  }

}
