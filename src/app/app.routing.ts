// @formatter:off
/* eslint-disable max-len */

import { Route } from "@angular/router";
import { AuthGuard } from "src/app/core/auth/guards/auth.guard";
import { NoAuthGuard } from "src/app/core/auth/guards/nonAuth.guard";
import { InitialDataResolver } from "./app.resolvers";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },


    // Auth routes 
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        children: [
            { path: 'sign-in', loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) },
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
        ]
    }

];