import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedin:boolean;

  constructor() {}

  isLoggedIn() {
    if (localStorage.getItem('currentUserToken') == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    } else {
      return true;
    }
  }


}
