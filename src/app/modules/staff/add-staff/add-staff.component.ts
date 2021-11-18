import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent implements OnInit {
  constructor(private staffService: EmployeeService) {}

  employeeCode:string;

  ngOnInit(): void {
    this.generateEmployeeCode();
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
    this.staffService.addStaff(form.value).subscribe((res) => {
      console.log(res);
    },error=>{
      console.log(error);
    });
  }
}
