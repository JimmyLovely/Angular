import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { SecondRoutingModule, SecondComponents } from './second-routing.module';

@NgModule({
    declarations: [
        ...SecondComponents
    ],
    imports: [
        CommonModule,
        SecondRoutingModule
    ]
})
export class SecondModule { }
