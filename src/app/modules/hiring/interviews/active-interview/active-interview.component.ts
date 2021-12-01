import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-active-interview',
  templateUrl: './active-interview.component.html',
  styleUrls: ['./active-interview.component.css']
})
export class ActiveInterviewComponent implements OnInit {

  newInterview;
  isLoading = false;

  constructor(private employeeService: EmployeeService) {}
  
  ngOnInit(): void {
    this.getActiveInterviews();
  }
  
  getActiveInterviews() {
    this.isLoading = true;
    this.employeeService.getActiveInter().subscribe(
      (res) => {
        console.log(res);
        this.newInterview = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

}
