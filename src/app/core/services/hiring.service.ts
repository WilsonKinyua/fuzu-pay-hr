import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../../shared/models/job';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HiringService {
  baseurl = environment.sourceUrl;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor( private http: HttpClient) { }

  createListing(listings: Job) {
    return this.http.post(this.baseurl + '/human-resource/api/jobs/', listings);
  }

  getAllActiveJob() {
    return this.http.get(this.baseurl + '/human-resource/api/jobs/active/');
  }
  getAllPastJob() {
    return this.http.get(this.baseurl + '/human-resource/api/jobs/past/');
  }
}
