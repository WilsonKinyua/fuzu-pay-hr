import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EnsureAuthenticatedService {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('currentUserToken')) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
