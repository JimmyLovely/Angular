import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { SecondRoutingModule, SecondComponents } from './second-routing.module';
import { FirstModule } from '../first/first.module';

@NgModule({
    declarations: [
        ...SecondComponents
    ],
    imports: [
        CommonModule,
        SecondRoutingModule,
        FirstModule
    ]
})
export class SecondModule { }
