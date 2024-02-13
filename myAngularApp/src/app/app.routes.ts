import { Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AuthComponent } from './modules/auth/auth.component';
import { ErrorComponent } from './modules/error/error.component';
import { FormularioPrincipalComponent } from './modules/admin/pages/formulario-principal/formulario-principal.component';
import { DashboardComponent } from './modules/admin/pages/dashboard/dashboard.component';

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
        component: AdminComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'formulario-principal',
                component: FormularioPrincipalComponent
            },
        ]
    },
    {
        path: '**',
        component: ErrorComponent
    },
];
