import { Component, OnInit } from '@angular/core';
import { HiringService } from 'src/app/core/services/hiring.service';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-past-listing',
  templateUrl: './past-listing.component.html',
  styleUrls: ['./past-listing.component.css']
})
export class PastListingComponent implements OnInit {
  jobs;
  isLoading = false;
  constructor(
    private hiringservice: HiringService,
    private departmentService: DepartmentService,
  ) { }

  ngOnInit(): void {
    this.getAllpastListings();

  }

  
  getAllpastListings() {
    this.isLoading = true;
    this.hiringservice.getAllPastJob().subscribe(
      (res) => {
        
        this.jobs = res;
        this.isLoading = false;
        console.log(res);
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }  
  
}
