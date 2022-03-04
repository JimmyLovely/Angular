import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { FirstRoutingModule, FirstComponents } from "./first-routing.module";
import { SecondModule } from '../second/second.module';

// Service
import { FooOneService } from './service/foo-one.service';
import { FooTwoService } from './service/foo-two.service';

@NgModule({
    declarations: [
        ...FirstComponents
    ],
    imports: [
        CommonModule,
        FirstRoutingModule,
        // SecondModule // <-- this is the problem, circular dependency
    ],
    providers: [
        FooOneService,
        FooTwoService
    ],
})
export class FirstModule { }
