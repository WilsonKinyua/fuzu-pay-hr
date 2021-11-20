import { User } from './../../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  sourceUrl = 'https://machachari.herokuapp.com';

  login(user: User) {
    return this.http.post(this.sourceUrl + '/account/login/', user);
  }
}
