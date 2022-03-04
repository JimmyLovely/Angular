import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { FirstRoutingModule, FirstComponents } from "./first-routing.module";

@NgModule({
    declarations: [
        ...FirstComponents
    ],
    imports: [
        CommonModule,
        FirstRoutingModule
    ]
})
export class FirstModule { }
