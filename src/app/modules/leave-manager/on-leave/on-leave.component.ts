
import { Component, OnInit } from '@angular/core';
import { OnLeaveService } from 'src/app/core/services/on-leave.service';


@Component({
  selector: 'app-on-leave',
  templateUrl: './on-leave.component.html',
  styleUrls: ['./on-leave.component.css']
})
export class OnLeaveComponent implements OnInit {
  empOnLeave;
  isLoading = false;
  days;


  constructor(private OnLeaveService: OnLeaveService) { }


  getEmpOnLeave() {
    this.isLoading = true;
    this.OnLeaveService.getOnLeave().subscribe(
      (res) => {
        console.log(res);
        this.empOnLeave = res;
        this.empOnLeave.forEach((leave) => {
          const startDateTime = new Date(leave.leave_date_from).getTime();
          const endDateTime = new Date(leave.leave_date_to).getTime();
          const difference = endDateTime - startDateTime;
          this.days = Math.round(difference / (1000 * 60 * 60 * 24));
          leave.days = this.days;
        });
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }


  ngOnInit(): void {
    this.getEmpOnLeave();
  }

}
