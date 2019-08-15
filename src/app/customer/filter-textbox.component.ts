import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `
               Filter: <input type="text" [(ngModel)]="filtering"/>
              `
})

export class FilterTextBoxComponent implements OnInit{
    private _filter: string;
    @Input() get filtering(){
        return this._filter;
    }
    set filtering(val: string){
        this._filter = val;
        this.changed.emit(this.filtering);
    }
    @Output() changed: EventEmitter<string> = new EventEmitter<string>();
     
    constructor(){}
    ngOnInit(){

    }
}