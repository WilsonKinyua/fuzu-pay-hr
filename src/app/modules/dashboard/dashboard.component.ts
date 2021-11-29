import { Component, OnInit } from '@angular/core';
import { GetLoggedUserService } from 'src/app/core/services/get-logged-user.service';
import { GetUserTokenService } from 'src/app/core/services/get-user-token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayText;
  UserName;
  constructor(
    private loggedUserService: GetLoggedUserService,
    private userTokenService: GetUserTokenService
  ) {}

  ngOnInit(): void {
    this.getTimeGreeting();
    this.getLoggedUserName();
  }

  // check what time it is and display the greeting
  getTimeGreeting() {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      this.displayText = 'Good Morning';
    } else if (currentTime < 18) {
      this.displayText = 'Good Afternoon';
    } else {
      this.displayText = 'Good Evening';
    }
  }

  getLoggedUserName() {
    const token = this.userTokenService.getUserToken();
    this.loggedUserService.getLoggedUser(token).subscribe((response) => {
      this.UserName = response;
      this.UserName = this.UserName.user.other_names;
      console.log(this.UserName);
    });
  }
}
