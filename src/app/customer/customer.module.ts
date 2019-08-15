import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CustomerComponent} from './customer.component';
import {CustomersListComponent} from './customer-list.component';
import { FilterTextBoxComponent } from './filter-textbox.component';
import { SharedModule } from '../Shared.module/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // { path: 'customers', component: CustomerComponent }
    {path: '', component: CustomerComponent}
];

@NgModule({
    imports: [CommonModule,SharedModule, FormsModule, RouterModule.forChild(routes)],
    declarations: [CustomerComponent, CustomersListComponent, FilterTextBoxComponent],
    exports: [CustomerComponent]
})
export class CustomerModule{

}