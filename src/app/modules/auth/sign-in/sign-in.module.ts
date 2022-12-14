import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AntdModule } from 'src/shared/antd.module';
import { SharedModule } from 'src/shared/shared.module';
import { AuthSignInComponent } from './sign-in.component';
import { authSignInRoutes } from './sign-in.routing';

@NgModule({
    declarations: [
        AuthSignInComponent
    ],
    imports: [
        RouterModule.forChild(authSignInRoutes),
        SharedModule,
        AntdModule
    ]
})
export class AuthSignInModule {
}
