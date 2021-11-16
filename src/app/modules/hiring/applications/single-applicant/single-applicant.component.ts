import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-applicant',
  templateUrl: './single-applicant.component.html',
  styleUrls: ['./single-applicant.component.css']
})
export class SingleApplicantComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  
  goBack() {
    // window.history.back();
    this.location.back();
  }
}
