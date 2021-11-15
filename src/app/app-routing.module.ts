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
import { StaffDetailsComponent } from './modules/staff/staff-details/staff-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'leave-manager', component: LeaveManagerComponent },
  { path: 'hiring', component: HiringComponent },
  { path: 'hiring/jobs', component: JobsComponent },
  { path: 'hiring/jobs/newlisting', component: NewListingComponent},
  { path: 'hiring/jobs/activelisting', component: ActiveListingComponent},
  { path: 'hiring/jobs/pastlisting', component: PastListingComponent},
  { path: 'hiring/application/newapplication', component: ApplicationsComponent},
  { path: 'reports', component: ReportsComponent },
  { path: 'staff/departments', component: DepartmentsComponent },
  { path: 'staff/add-staff', component: AddStaffComponent },
  { path: 'staff/view', component: StaffDetailsComponent},
  { path: 'leave-manager/on-leave', component: OnLeaveComponent },
  {path: 'leave-manager/active-staff', component: ActiveStaffComponent},
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
