import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Leave } from 'src/app/shared/models/leave';

@Injectable({
  providedIn: 'root'
})
export class OnLeaveService {
  sourceUrl = environment.sourceUrl;

  constructor(private http: HttpClient) {}

  
  //  employees on leave
  getOnLeave() {
    return this.http.get(this.sourceUrl + '/human-resource/api/leaves/on_leave/');
  }

  
}
