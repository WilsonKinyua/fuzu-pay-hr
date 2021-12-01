import { Component, OnInit } from '@angular/core';
import { HiringService } from 'src/app/core/services/hiring.service';

@Component({
  selector: 'app-active-listing',
  templateUrl: './active-listing.component.html',
  styleUrls: ['./active-listing.component.css']
})
export class ActiveListingComponent implements OnInit {
  jobs;
  isLoading = false;
  constructor(
    private hiringservice: HiringService,
  ) { }

  ngOnInit(): void {
    this.getAllActiveListings();

  }

  getAllActiveListings() {
    this.isLoading = true;
    this.hiringservice.getAllActiveJob().subscribe(
      (res) => {
        console.log(res);
        this.jobs = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

}
