import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetLoggedUserService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.sourceUrl;

  getLoggedUser(token: string) {
    return this.http.get(this.baseUrl + '/account/user/' + token);
  }
}
