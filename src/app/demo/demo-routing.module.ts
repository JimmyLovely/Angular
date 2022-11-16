import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Component
import { DemoComponent } from './demo.component';
import { SmartTableComponent } from './smart.table/smart.table.component';
import { SmartTableDeepPrototypeComponent } from './smart-table-deep-prototype/smart-table-deep-prototype.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { I18nComponent } from "./i18n/i18n.component";
import { FormBasisComponent } from './form-basis/form-basis.component';
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { LifecycleChildComponent } from "./lifecyle/lifecycle-child/lifecycle-child.component";
import { LifecycleParentComponent } from "./lifecyle/lifecycle-parent/lifecycle-parent.component";
import { AgGridDemoComponent } from "./ag-grid-demo/ag-grid-demo.component";

const routes: Routes = [
    {
        path: '',
        component: DemoComponent,
        children: [
            {
                path: 'smarttable',
                component: SmartTableComponent
            }, {
                path: 'smarttable-deep-prototype',
                component: SmartTableDeepPrototypeComponent
            }, {
                path: 'rxjs',
                component: RxjsComponent
            }, {
                path: 'i18n',
                component: I18nComponent
            }, {
                path: 'form-basis',
                component: FormBasisComponent
            }, {
                path: 'parent',
                component: ParentComponent
            }, {
                path: 'child',
                component: ChildComponent
            }, {
                path: 'lifecycle/child',
                component: LifecycleChildComponent
            }, {
                path: 'lifecycle/parent',
                component: LifecycleParentComponent
            }, {
                path: 'ag-grid',
                component: AgGridDemoComponent
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DemoRoutingModule { }

export const DemoComponents = [
    DemoComponent,
    SmartTableComponent,
    SmartTableDeepPrototypeComponent,
    RxjsComponent,
    I18nComponent,
    FormBasisComponent,
    ParentComponent,
    ChildComponent,
    LifecycleParentComponent,
    LifecycleChildComponent,
    AgGridDemoComponent,
];
