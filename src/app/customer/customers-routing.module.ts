import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // { path: 'customers', component: CustomerComponent }
    {path: 'customers', loadChildren: "./customer.module#CustomerModule"}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class CustomersRoutingModule {

}