import { NgModule } from '@angular/core';

import { AuthRoutingModule, AuthComponents } from "./auth-routing.module";

@NgModule({
    declarations: [
        ...AuthComponents
    ],
    imports: [
        AuthRoutingModule
    ],
    exports: [...AuthComponents],
    providers: [],
})
export class AuthModule {}

