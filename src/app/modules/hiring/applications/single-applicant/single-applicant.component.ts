import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-single-applicant',
  templateUrl: './single-applicant.component.html',
  styleUrls: ['./single-applicant.component.css']
})
export class SingleApplicantComponent implements OnInit {
  applicantId;
  singleApplicant;
  isLoading = false;

  constructor( 
    private route: ActivatedRoute,
    private employeeservice: EmployeeService
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

  
}
