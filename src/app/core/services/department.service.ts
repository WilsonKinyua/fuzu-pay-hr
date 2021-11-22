import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  sourceUrl = environment.sourceUrl;

  constructor(private http: HttpClient) {}

  // get all departments
  getDepartments() {
    return this.http.get(`${this.sourceUrl}/human-resource/api/departments/`);
  }
}
