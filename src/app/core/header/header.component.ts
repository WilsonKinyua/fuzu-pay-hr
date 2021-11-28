import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map,share } from 'rxjs/operators';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  time = new Date();
  date: Date = new Date(Date.now());
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  
  constructor() {
   }

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
    .subscribe(time => {
      this.rxTime = time;
    });
  }
  // running clock
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}


