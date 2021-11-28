import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetUserTokenService {
  userToken;

  constructor() {}

  getUserToken() {
    this.userToken = localStorage.getItem('currentUserToken');
    return this.userToken;
  }
}
