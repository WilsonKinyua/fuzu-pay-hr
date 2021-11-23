import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../../shared/models/job';

@Injectable({
  providedIn: 'root'
})
export class HiringService {
  baseurl = "https://fuzupay-hr.herokuapp.com";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor( private http: HttpClient) { }

  createListing(listings: Job) {
    return this.http.post(this.baseurl + '/human-resource/api/jobs/', listings);
  }

  getAllJobListings() {
    return this.http.get(this.baseurl + '/human-resource/api/jobs/');
  }
}
