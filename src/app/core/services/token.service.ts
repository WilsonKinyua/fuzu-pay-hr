import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  setToken(token: string) {
    localStorage.setItem('currentUserToken', token);
    // sessionStorage.setItem('isLoggedIn', 'true');
  }
}
