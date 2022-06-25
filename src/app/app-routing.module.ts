import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module')
            .then(demo => demo.DemoModule),
    },
    {
        path: 'module-first',
        loadChildren: () => import('./module/first/first.module')
            .then(first => first.FirstModule),
    },
    {
        path: 'module-second',
        loadChildren: () => import('./module/second/second.module')
            .then(second => second.SecondModule),
    },
    { path: '', redirectTo: 'demo', pathMatch: 'full' },
    { path: '**', redirectTo: 'demo' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
