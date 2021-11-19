import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  staffs;
  isLoading = false;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllStaff();
  }

  // change the button current state
  onClick(event: any) {
    const element = event.target || event.srcElement || event.currentTarget;
    const idAttr = element.attributes.class;
    const value = idAttr.nodeValue;
    const buttons = document.getElementsByClassName(value);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('btn-current-active');
    }
    event.target.classList.add('btn-current-active');
    // const currentClickedButtonId = event.target.id;
  }

  // fetch all staff
  getAllStaff() {
    this.isLoading = true;
    this.employeeService.getAllEmployees().subscribe(
      (res) => {
        console.log(res);
        this.staffs = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
