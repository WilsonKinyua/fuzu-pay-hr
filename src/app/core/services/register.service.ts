import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  sourceUrl = environment.sourceUrl;

  register(user: User) {
    return this.http.post(`${this.sourceUrl}/account/register/`, user);
  }
}
