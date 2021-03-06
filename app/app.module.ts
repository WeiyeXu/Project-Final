import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { registerElement } from "nativescript-angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

registerElement("PreviousNextView", () => require("nativescript-iqkeyboardmanager").PreviousNextView);

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { DetailComponent } from "./detail/detail.component";


import { UserService } from "./shared/user.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { WorkordersService } from "./shared/workorders.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        HttpClientModule

    ],
    declarations: [
        AppComponent,
        DetailComponent
    ],
    providers: [
        UserService,
        WorkordersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }