import { Component, OnInit } from '@angular/core';
import { ActiveStaffService } from 'src/app/core/services/active-staff.service';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EmploymentTypeService } from 'src/app/core/services/employment-type.service';

@Component({
  selector: 'app-active-staff',
  templateUrl: './active-staff.component.html',
  styleUrls: ['./active-staff.component.css']
})
export class ActiveStaffComponent implements OnInit {
  departments;
  employmentType;
  activeEmp;
  isLoading = false;
  constructor(private activestaffService: ActiveStaffService,
              private departmentService: DepartmentService,
              private employmentTypeService: EmploymentTypeService, ) {}

  getActiveStaff() {
    this.isLoading = true;
    this.activestaffService.ActiveStaff().subscribe(
      (res) => {
        console.log(res);
        this.activeEmp = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
  // get departments
  getDepartments() {
    this.departmentService.getDepartments().subscribe((res) => {
      console.log(
        '================================ Departments =========================='
      );
      this.departments = res;
      console.log(res);
    });
  }

  // get employment types
  getEmploymentTypes() {
    this.employmentTypeService.getEmploymentTypes().subscribe((res) => {
      console.log(
        '================================ Employment Types =========================='
      );
      this.employmentType = res;
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.getActiveStaff();
    this.getDepartments();
    this.getEmploymentTypes();
  }

}
