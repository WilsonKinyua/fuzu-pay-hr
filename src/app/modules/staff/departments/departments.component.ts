import { Component, OnInit} from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],

})
export class DepartmentsComponent implements OnInit {

  depDetails;
  isLoading = false;

  constructor(private departmentService: EmployeeService ) {}

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

  getDepartmentDetails() {
    this.isLoading = true;
    this.departmentService.getAllEmployees().subscribe(
      (res) => {
        console.log(res);
        this.depDetails = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.getDepartmentDetails()

  }



}
