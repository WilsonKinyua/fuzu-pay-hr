import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-applicant',
  templateUrl: './single-applicant.component.html',
  styleUrls: ['./single-applicant.component.css']
})
export class SingleApplicantComponent implements OnInit {
  applicantId;
  singleApplicant;
  isLoading = false;
  successMessage;
  errorMessage;

  constructor( 
    private route: ActivatedRoute,
    private employeeservice: EmployeeService,
    private location: Location
    ) {}

  ngOnInit(): void {
    let paramSub = this.route.params.subscribe(
      (params) => {
        console.log(params);
        this.applicantId = params.id;
        console.log(this.applicantId);
        this.getSingleApplicant();
      },
      (error) => {
        console.error(error);
        paramSub.unsubscribe();
      },
      () => {
        paramSub.unsubscribe();
      }
    );
  }

  getSingleApplicant() {
    this.isLoading = true;
    this.employeeservice.getOneApplicant(this.applicantId).subscribe(
      (singleApplicant) => {
        console.log(singleApplicant);
        this.singleApplicant = singleApplicant;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
  
  // schedule interviews 

  scheduleInter(form: NgForm) {
    console.log(form.value);
    this.isLoading = true;
    this.employeeservice.scheduleInterview(form.value).subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false;
        this.successMessage = res;
      },
      (error) => {
        this.errorMessage = error.error;
        this.isLoading = false;
        console.log(this.errorMessage);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  
}
