import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AttendanceComponent } from './component/attendance/attendance.component';
import { ResultsComponent } from './component/results/results.component';
import { TimeTableComponent } from './component/time-table/time-table.component';
import { HelpComponent } from './component/help/help.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'attendance',
        component: AttendanceComponent,
    },
    {
        path: 'results',
        component: ResultsComponent,
    },
    {
        path: 'time-table',
        component: TimeTableComponent,
    },
    {
        path: 'help',
        component: HelpComponent,
    },
];