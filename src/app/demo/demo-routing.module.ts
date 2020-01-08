import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DemoComponent } from './demo.component';
import { SmartTableComponent } from './smart.table/smart.table.component';

const routes: Routes = [
    {
        path: '', component: DemoComponent,
        children: [
            {
                path: 'smarttable',
                component: SmartTableComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }

export const DemoComponents = [
    DemoComponent,
    SmartTableComponent
];
