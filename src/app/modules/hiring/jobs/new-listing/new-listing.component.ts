import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HiringService } from 'src/app/core/services/hiring.service';
import { DepartmentService } from 'src/app/core/services/department.service';


@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit{
  constructor( 
    private hiringservice: HiringService,
    private departmentService: DepartmentService,
    ) { }

  
  listings;
  isLoading = false;
  departments;
  errorMessage: any = [];
  successMessage = null;

  ngOnInit(): void {
    this.getDepartments();
  }

  addListingOnSubmit(form: NgForm) {
    console.log(form.value);
    this.isLoading = true;
    this.hiringservice.createListing(form.value).subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false;
        this.successMessage = res;
      },
      (error) => {
        this.errorMessage = error.error;
        this.isLoading = false;
        console.log(this.errorMessage);
      }
    );
  }


  getDepartments() {
    this.departmentService.getDepartments().subscribe((res) => {
      console.log(
        '================================ Departments =========================='
      );
      this.departments = res;
      console.log(res);
    });
  }

}

