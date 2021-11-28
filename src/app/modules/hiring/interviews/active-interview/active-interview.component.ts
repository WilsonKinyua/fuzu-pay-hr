import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-active-interview',
  templateUrl: './active-interview.component.html',
  styleUrls: ['./active-interview.component.css']
})
export class ActiveInterviewComponent implements OnInit {

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
