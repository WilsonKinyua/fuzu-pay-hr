import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  sourceUrl = 'https://machachari.herokuapp.com';

  register(user: User) {
    return this.http.post(`${this.sourceUrl}/account/register/`, user);
  }
}
