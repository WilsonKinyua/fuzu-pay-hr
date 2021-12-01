import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css'],
})
export class StaffDetailsComponent implements OnInit {
  employeeId: string = '';
  employee;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location

  ) {}

  ngOnInit(): void {
    let paramSub = this.route.params.subscribe(
      (params) => {
        console.log(params);
        this.employeeId = params.employee_id;
        console.log('employee ID => ', this.employeeId);
        this.getEmployee();
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

  // get single employee by id
  getEmployee() {
    this.isLoading = true;
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (employee) => {
        console.log(employee);
        this.employee = employee;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
