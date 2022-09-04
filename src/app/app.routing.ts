// @formatter:off
/* eslint-disable max-len */

import { Route } from "@angular/router";
import { AuthGuard } from "src/core/auth/guards/auth.guard";
import { NoAuthGuard } from "src/core/auth/guards/nonAuth.guard";
import { InitialDataResolver } from "./app.resolvers";

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
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'dashboard', loadChildren: () => import('./modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
        ]
    }

];