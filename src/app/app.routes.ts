import { Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AuthComponent } from './modules/auth/auth.component';
import { ErrorComponent } from './modules/error/error.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: '**',
        component: ErrorComponent
    },
];
