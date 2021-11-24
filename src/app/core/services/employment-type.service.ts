import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmploymentTypeService {
  sourceUrl = environment.sourceUrl;

  constructor(private http: HttpClient) {}

  getEmploymentTypes() {
    return this.http.get(this.sourceUrl + '/human-resource/api/employment_types/');
  }
}
