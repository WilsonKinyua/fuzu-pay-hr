import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-past-interview',
  templateUrl: './past-interview.component.html',
  styleUrls: ['./past-interview.component.css']
})
export class PastInterviewComponent implements OnInit {

  pastInterview;
  isLoading = false;

  constructor(private employeeService: EmployeeService) {}
  
  getPastInterviews() {
    this.isLoading = true;
    this.employeeService.getPastInter().subscribe(
      (res) => {
        console.log(res);
        this.pastInterview = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.getPastInterviews();
  }

}
