import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-new-applicant',
  templateUrl: './new-applicant.component.html',
  styleUrls: ['./new-applicant.component.css']
})
export class NewApplicantComponent implements OnInit {

  newApplicant;
  isLoading = false;

  constructor(private employeeService: EmployeeService) {}
  
  getnewApplicants() {
    this.isLoading = true;
    this.employeeService.getNewApplicant().subscribe(
      (res) => {
        console.log(res);
        this.newApplicant = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.getnewApplicants();
  }

}
