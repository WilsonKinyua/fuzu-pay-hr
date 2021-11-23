import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestService {
  constructor(private http: HttpClient) {}

  sourceUrl = environment.sourceUrl;

  // get all leave requests
  getAllLeaveRequests() {
    return this.http.get(`${this.sourceUrl}/human-resource/api/leaves/`);
  }

  // update leave request
  uproveLeaveRequest(id: number) {
    return this.http.put(
      `${this.sourceUrl}/human-resource/api/leaves/${id}/approve/`,
      { status: 'approved' }
    );
  }

  // reject leave request
  rejectLeaveRequest(id: number) {
    return this.http.put(
      `${this.sourceUrl}/human-resource/api/leaves/${id}/approve/`,
      { status: 'rejected' }
    );
  }
}
