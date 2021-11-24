import { Component, OnInit } from '@angular/core';
import { ActiveStaffService } from 'src/app/core/services/active-staff.service';

@Component({
  selector: 'app-active-staff',
  templateUrl: './active-staff.component.html',
  styleUrls: ['./active-staff.component.css']
})
export class ActiveStaffComponent implements OnInit {

  activeEmp;
  isLoading = false;
  constructor(private activestaffService: ActiveStaffService) {}

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

  ngOnInit(): void {
    this.getActiveStaff()
  }

}
