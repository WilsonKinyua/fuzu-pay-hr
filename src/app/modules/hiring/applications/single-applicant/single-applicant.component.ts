import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-single-applicant',
  templateUrl: './single-applicant.component.html',
  styleUrls: ['./single-applicant.component.css']
})
export class SingleApplicantComponent implements OnInit {

  // constructor(private location: Location) { }
  constructor(private employeeservice: EmployeeService) {}

  singleApplicant;
  isLoading = false;

  getSingleApplicant() {
    this.isLoading = true;
    this.employeeservice.getPastApplicant().subscribe(
      (res) => {
        console.log(res);
        this.singleApplicant = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.getSingleApplicant()
  }
  
  
}
