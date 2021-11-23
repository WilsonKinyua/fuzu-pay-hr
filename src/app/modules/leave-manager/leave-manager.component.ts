import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/core/services/leave-request.service';

@Component({
  selector: 'app-leave-manager',
  templateUrl: './leave-manager.component.html',
  styleUrls: ['./leave-manager.component.css'],
})
export class LeaveManagerComponent implements OnInit {
  constructor(private leaveRequestService: LeaveRequestService) {}

  leavesRequests;
  isLoading = false;
  checkedInputs = [];
  successMessage;
  errorMessage;

  ngOnInit(): void {
    this.getLeaveRequests();
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
  }

  // get leave requests
  getLeaveRequests() {
    this.isLoading = true;
    this.leaveRequestService.getAllLeaveRequests().subscribe(
      (res) => {
        console.log(res);
        this.leavesRequests = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  // on checked radio button add it to the array checkedInputs
  onChecked(id) {
    this.checkedInputs.push(id);
  }

  // on uncheck radio button remove it from the array checkedInputs
  // onUnchecked(id) {
  //   const index = this.checkedInputs.indexOf(id);
  //   this.checkedInputs.splice(index, 1);
  //   console.log(this.checkedInputs);
  // }

  // on click approve leave request loop through the array of checked inputs and update the leave request
  onSubmitApproveLeaveRequest() {
    this.isLoading = true;
    this.checkedInputs.forEach((id) => {
      this.leaveRequestService.uproveLeaveRequest(id).subscribe(
        (res) => {
          console.log('Approved status', res);
          this.getLeaveRequests();
            this.successMessage = 'Leave request approved successfully';
            this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.errorMessage = 'Something went wrong';
          this.isLoading = false;
        }
      );
    });
  }

  // on click reject leave request loop through the array of checked inputs and update the leave request
  onSubmitRejectLeaveRequest() {
    this.isLoading = true;
    this.checkedInputs.forEach((id) => {
      this.leaveRequestService.rejectLeaveRequest(id).subscribe(
        (res) => {
          console.log('Rejected status', res);
          this.getLeaveRequests();
          this.successMessage = 'Leave request rejected successfully';
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.errorMessage = 'Something went wrong';
          this.isLoading = false;
        }
      );
    });
  }
}
