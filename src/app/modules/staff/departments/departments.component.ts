import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Department } from 'src/app/shared/models/department';
import { Staff } from 'src/app/shared/models/staff';

// const res = Object.entries(Staff);
// console.log(res)

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  
})
export class DepartmentsComponent implements OnInit {
  departments;
  department : Department ;
  staffs;
  lstStaff:Staff[];
  selected : Number;
  // selectedData;
  isLoading = false;
  constructor(
    private departmentService: DepartmentService,
    private employeeService : EmployeeService,
  ) {}
  
  
  // empty error message array
  errorMessage: any = [];
  successMessage = null;
  ngOnInit(): void {
    this.getDepartments();
  }
  
  onselected(selectedDepartmentId:any):void{
    this.departmentService.getEmployeesByDepartments(selectedDepartmentId).subscribe
    (
      data =>
      {
        this.lstStaff = data;
      }
    )
  }
  // add department
  addDepartmentOnSubmit(form: NgForm) {
    console.log(form.value);
    this.isLoading = true;
    this.departmentService.addDepartment(form.value).subscribe(
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
  // get departments

  getDepartments() {
    this.isLoading = true;
    this.departmentService.getDepartments().subscribe(
      (res) => {
        console.log(res);
        this.departments = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
// get a list of employees from departments

// showemployee(filter:string)
// {
//   this.employeeService.getAllEmployees().subscribe(res =>
//   {
//      this.getAllStaff = res.filter(u => u.department == 'filter')
//   })
// }
//get a list of all employees
// getAllStaff() {
//   this.isLoading = true;
//   this.employeeService.getAllEmployees().subscribe(
//     (res) => {
//       console.log(res);
//       this.staffs = res;
//       this.isLoading = false;
//     },
//     (error) => {
//       console.log(error);
//       this.isLoading = false;
//     }
//   );
// }
}
