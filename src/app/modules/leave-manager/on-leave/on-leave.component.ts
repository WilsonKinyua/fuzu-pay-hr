
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


  constructor(private OnLeaveService: OnLeaveService) { }


  getEmpOnLeave() {
    this.isLoading = true;
    this.OnLeaveService.getOnLeave().subscribe(
      (res) => {
        console.log(res);
        this.empOnLeave = res;
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
