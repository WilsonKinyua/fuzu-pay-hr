import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EmploymentTypeService } from 'src/app/core/services/employment-type.service';
import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent implements OnInit {
  constructor(
    private staffService: EmployeeService,
    private departmentService: DepartmentService,
    private employmentTypeService: EmploymentTypeService
  ) {}

  employeeCode: string;
  departments;
  employmentType;

  // empty error message array
  errorMessage: any = [];
  successMessage = null;

  ngOnInit(): void {
    this.generateEmployeeCode();
    this.getDepartments();
    this.getEmploymentTypes();
  }

  showTextBox(event) {
    if (event.target.value == 'Input details') {
      document.getElementById('input-details').style.display = 'block';
      document.getElementById('upload-documents').style.display = 'none';
    } else {
      document.getElementById('input-details').style.display = 'none';
      document.getElementById('upload-documents').style.display = 'block';
    }
  }

  // generate random staff number
  generateEmployeeCode() {
    const year = new Date().getFullYear();
    const randomNumber = Math.floor(Math.random() * 1000);
    const code = Math.random().toString(36).substring(2, 4).toUpperCase();
    this.employeeCode = `${code}/${randomNumber}/${year}`;
    console.log(this.employeeCode);
  }

  // add staff
  addStaffOnSubmit(form: NgForm) {
    console.log(form.value);
    this.staffService.addStaff(form.value).subscribe(
      (res) => {
        console.log(res);
        this.successMessage = res;
      },
      (error) => {
        this.errorMessage = error.error;
        console.log(this.errorMessage);
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
}
