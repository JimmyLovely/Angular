import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// Component
import { SecondComponent } from './second.component';

const routes: Routes = [
    {
        path: '',
        component: SecondComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecondRoutingModule { }

export const SecondComponents = [
    SecondComponent
];
