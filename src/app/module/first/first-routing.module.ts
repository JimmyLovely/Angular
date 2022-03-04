import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { FirstComponent } from './first.component';

const routes: Routes = [
    {
        path: '',
        component: FirstComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FirstRoutingModule { }

export const FirstComponents = [
    FirstComponent
];
