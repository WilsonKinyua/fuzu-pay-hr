import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css'],
})
export class StaffDetailsComponent implements OnInit {
  employeeId: string = '';
  employee;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let paramSub = this.route.params.subscribe((params) => {
      console.log(params);
      this.employeeId = params.employee_Id;
      console.log('employee ID => ', this.employeeId);
      // this.getEmployee()
    });
  }
}
