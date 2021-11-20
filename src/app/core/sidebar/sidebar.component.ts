import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isAuthenticated: boolean;

  isLoggedIn() {
    this.isAuthenticated = this.authService.isLoggedIn();
  }
}
