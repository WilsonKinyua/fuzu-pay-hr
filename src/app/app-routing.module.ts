import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HiringComponent } from './modules/hiring/hiring.component';
import { JobsComponent } from './modules/hiring/jobs/jobs.component';
import { ActiveListingComponent } from './modules/hiring/jobs/active-listing/active-listing.component';
import { NewListingComponent } from './modules/hiring/jobs/new-listing/new-listing.component';
import { PastListingComponent } from './modules/hiring/jobs/past-listing/past-listing.component';
import { LeaveManagerComponent } from './modules/leave-manager/leave-manager.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { StaffComponent } from './modules/staff/staff.component';
import { ApplicationsComponent } from './modules/hiring/applications/applications.component';

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
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
