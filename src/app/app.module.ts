import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StaffComponent } from './modules/staff/staff.component';
import { StaffDetailsComponent } from './modules/staff/staff-details/staff-details.component';
import { DepartmentsComponent } from './modules/staff/departments/departments.component';
import { AddStaffComponent } from './modules/staff/add-staff/add-staff.component';
import { LeaveManagerComponent } from './modules/leave-manager/leave-manager.component';
import { HiringComponent } from './modules/hiring/hiring.component';
import { JobsComponent } from './modules/hiring/jobs/jobs.component';
import { NewListingComponent } from './modules/hiring/jobs/new-listing/new-listing.component';
import { ApplicationsComponent } from './modules/hiring/applications/applications.component';
import { InterviewsComponent } from './modules/hiring/interviews/interviews.component';
import { HiredComponent } from './modules/hiring/hired/hired.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { DatetimeComponent } from './shared/components/datetime/datetime.component';
import { AuthDirective } from './shared/directives/auth.directive';
import { SafePipe } from './shared/pipes/safe.pipe';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ActiveListingComponent } from './modules/hiring/jobs/active-listing/active-listing.component';
import { PastListingComponent } from './modules/hiring/jobs/past-listing/past-listing.component';
import { NewApplicantComponent } from './modules/hiring/applications/new-applicant/new-applicant.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StaffComponent,
    StaffDetailsComponent,
    DepartmentsComponent,
    AddStaffComponent,
    LeaveManagerComponent,
    HiringComponent,
    JobsComponent,
    NewListingComponent,
    ApplicationsComponent,
    InterviewsComponent,
    HiredComponent,
    ReportsComponent,
    LoaderComponent,
    DatetimeComponent,
    AuthDirective,
    SafePipe,
    CapitalizePipe,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ActiveListingComponent,
    PastListingComponent,
    NewApplicantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
