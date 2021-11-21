import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmploymentTypeService {
  sourceUrl = 'https://machachari.herokuapp.com';

  constructor(private http: HttpClient) {}

  getEmploymentTypes() {
    return this.http.get(this.sourceUrl + '/human-resource/api/employment_types/');
  }
}
