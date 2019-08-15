import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../Shared.module/interfaces';
import { SorterService } from '../Core/sorter.service';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html'
})
export class CustomersListComponent implements OnInit {
    private _customers: ICustomer[] = [];
    @Input() get customers(): ICustomer[]{
        return this._customers;
    }
    set customers(value: ICustomer[]){
        if(value){
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }
    filteredCustomers: ICustomer[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'USD';
    constructor(private sorterService: SorterService) {}
    
    ngOnInit() {
    
    }
    calculateOrders(){
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    }
    Filter(data:string){
        if(data){
            this.filteredCustomers = this.customers.filter((cust: ICustomer) =>{
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.orderTotal.toString().indexOf(data) > -1;
            });
            this.calculateOrders();
        }
        else{
            this.filteredCustomers = this.customers;
        }
    }
    sort(prop: string){
        // a sorted service will handle the sorting
        this.sorterService.sort(this.filteredCustomers, prop);
    }
}