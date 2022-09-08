import { NgModule } from "@angular/core";
import { AntdModule } from "src/shared/antd.module";
import { SharedModule } from "src/shared/shared.module";
import { LayoutComponent } from "./layout.component";

const layoutModules = [];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        SharedModule,
        AntdModule,
        ...layoutModules
    ],
    exports     : [
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule {
}