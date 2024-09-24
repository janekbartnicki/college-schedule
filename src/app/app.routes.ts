import { Routes } from '@angular/router';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'schedule', component: ScheduleComponent }
];
