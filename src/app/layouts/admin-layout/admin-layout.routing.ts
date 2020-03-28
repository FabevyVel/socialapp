import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TravellersList } from '../../pages/travellersTable/travellers_list';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',          component: DashboardComponent },
    { path: 'user',               component: UserComponent },
    { path: 'travellers_list',    component: TravellersList }
];
