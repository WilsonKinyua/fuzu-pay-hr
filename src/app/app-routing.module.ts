import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HiringComponent } from './modules/hiring/hiring.component';
import { JobsComponent } from './modules/hiring/jobs/jobs.component';
import { ActiveListingComponent } from './modules/hiring/jobs/active-listing/active-listing.component';
import { NewListingComponent } from './modules/hiring/jobs/new-listing/new-listing.component';
import { PastListingComponent } from './modules/hiring/jobs/past-listing/past-listing.component';
import { ActiveStaffComponent } from './modules/leave-manager/active-staff/active-staff.component';
import { LeaveManagerComponent } from './modules/leave-manager/leave-manager.component';
import { OnLeaveComponent } from './modules/leave-manager/on-leave/on-leave.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { AddStaffComponent } from './modules/staff/add-staff/add-staff.component';
import { DepartmentsComponent } from './modules/staff/departments/departments.component';
import { StaffComponent } from './modules/staff/staff.component';
import { ApplicationsComponent } from './modules/hiring/applications/applications.component';
import { PastApplicantComponent } from './modules/hiring/applications/past-applicant/past-applicant.component';
import { SingleApplicantComponent } from './modules/hiring/applications/single-applicant/single-applicant.component';
import { StaffDetailsComponent } from './modules/staff/staff-details/staff-details.component';
import { HiredComponent } from './modules/hiring/hired/hired.component';
import { InterviewsComponent } from './modules/hiring/interviews/interviews.component';
import { ActiveInterviewComponent } from './modules/hiring/interviews/active-interview/active-interview.component';
import { PastInterviewComponent } from './modules/hiring/interviews/past-interview/past-interview.component';
import { OfferLetterComponent } from './modules/hiring/hired/offer-letter/offer-letter.component';
import { InterviewStatusDeclinedComponent } from './modules/hiring/interviews/interview-status-declined/interview-status-declined.component';
import { InterviewStatusInreviewComponent } from './modules/hiring/interviews/interview-status-inreview/interview-status-inreview.component';
import { AlreadyLoggedService } from './core/services/already-logged.service';
import { EnsureAuthenticatedService } from './core/services/ensure-authenticated.service';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'staff',
    component: StaffComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'leave-manager',
    component: LeaveManagerComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring',
    component: HiringComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  { path: 'hiring/hired', component: HiredComponent },
  {
    path: 'hiring/offer-letter',
    component: OfferLetterComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/jobs',
    component: JobsComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/interview',
    component: InterviewsComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/jobs/newlisting',
    component: NewListingComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/jobs/activelisting',
    component: ActiveListingComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/jobs/pastlisting',
    component: PastListingComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/application/newapplication',
    component: ApplicationsComponent,
  },
  {
    path: 'hiring/application/pastapplications',
    component: PastApplicantComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/application/singleapplications/:id',
    component: SingleApplicantComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/interview/active',
    component: ActiveInterviewComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/interview/past',
    component: PastInterviewComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/interview/declined',
    component: InterviewStatusDeclinedComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'hiring/interview/inreview',
    component: InterviewStatusInreviewComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'reports',
    component: ReportsComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'staff/departments',
    component: DepartmentsComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'staff/add-staff',
    component: AddStaffComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'staff/:employee_id',
    component: StaffDetailsComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'leave-manager/on-leave',
    component: OnLeaveComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'leave-manager/active-staff',
    component: ActiveStaffComponent,
    // canActivate: [EnsureAuthenticatedService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AlreadyLoggedService],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
