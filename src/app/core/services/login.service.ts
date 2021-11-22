import { User } from './../../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  sourceUrl = environment.sourceUrl;

  login(user: User) {
    return this.http.post(this.sourceUrl + '/account/login/', user);
  }
}
