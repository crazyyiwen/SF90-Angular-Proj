import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'control-message',
    template: `<div *ngIf="errorMessage !== null"></div>`
})

export class ControlMessages{
    errormessage: string;
    @Input() control: FormControl;
    constructor(){

    }
    get errorMessage(){
        for(let propertyname in this.control.errors){
            return ;
        }
    }
}