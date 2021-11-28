import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayText;
  constructor() {}

  ngOnInit(): void {
    this.getTimeGreeting();
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

}
