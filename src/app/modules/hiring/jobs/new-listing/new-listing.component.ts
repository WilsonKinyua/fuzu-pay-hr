import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit {

  jobLists;
  isLoading = false;
  constructor(private employeeService: EmployeeService) {}

 

  getNewApplicant() {
    this.isLoading = true;
    this.employeeService.getNewApplicant().subscribe(
      (res) => {
        console.log(res);
        this.jobLists = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }


  ngOnInit(): void {
    this.getNewApplicant();
  }

}
