import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlreadyLoggedService {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('currentUserToken')) {
      this.router.navigateByUrl('/dashboard');
      return false;
    } else {
      return true;
    }
  }
}
