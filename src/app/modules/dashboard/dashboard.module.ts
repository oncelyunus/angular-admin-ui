import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AntdModule } from 'src/shared/antd.module';
import { SharedModule } from 'src/shared/shared.module';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports     : [
        RouterModule.forChild(dashboardRoutes),
        SharedModule,
        AntdModule
    ]
})
export class DashboardModule
{
}
