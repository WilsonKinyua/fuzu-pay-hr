import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { GetLoggedUserService } from '../services/get-logged-user.service';
import { GetUserTokenService } from '../services/get-user-token.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  time = new Date();
  date: Date = new Date(Date.now());
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  isAuthenticated: boolean;
  UserName;
  isLoading = true;

  constructor(
    private authService: AuthenticationService,
    private loggedUserService: GetLoggedUserService,
    private userTokenService: GetUserTokenService
  ) {}

  ngOnInit(): void {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time) => {
        this.rxTime = time;
      });

    this.isLoggedIn();
    this.getLoggedUserName();
  }

  // running clock
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  isLoggedIn() {
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  getLoggedUserName() {
    const token = this.userTokenService.getUserToken();
    this.loggedUserService.getLoggedUser(token).subscribe((response) => {
      this.UserName = response;
      this.UserName =
        this.UserName.user.other_names + ' ' + this.UserName.user.surname;
      console.log(this.UserName);
    });
  }
}
