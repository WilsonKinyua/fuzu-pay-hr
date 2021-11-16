import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
