import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActiveStaffService {
  sourceUrl = environment.sourceUrl;

  constructor(private http: HttpClient) {}

  ActiveStaff() {
    return this.http.get(this.sourceUrl + '/human-resource/api/leaves/active-staffs/');
  }

}
