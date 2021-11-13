import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HiringComponent } from './modules/hiring/hiring.component';
import { ActiveStaffComponent } from './modules/leave-manager/active-staff/active-staff.component';
import { LeaveManagerComponent } from './modules/leave-manager/leave-manager.component';
import { OnLeaveComponent } from './modules/leave-manager/on-leave/on-leave.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { AddStaffComponent } from './modules/staff/add-staff/add-staff.component';
import { DepartmentsComponent } from './modules/staff/departments/departments.component';
import { StaffComponent } from './modules/staff/staff.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'leave-manager', component: LeaveManagerComponent },
  { path: 'hiring', component: HiringComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'add-staff', component: AddStaffComponent },
  { path: 'on-leave', component: OnLeaveComponent },
  {path: 'active-staff', component: ActiveStaffComponent},
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
