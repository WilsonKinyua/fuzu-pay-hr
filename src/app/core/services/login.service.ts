import { User } from './../../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  sourceUrl = 'http://127.0.0.1:8000';

  login(user: User) {
    return this.http.post(this.sourceUrl + '/account/login/', user);
  }
}
