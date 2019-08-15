import {Component, ViewChild} from '@angular/core';
import {CounterChildComponent} from './counter-child.component';

@Component({
    selector: 'counter-parent',
    templateUrl: './counter-parent.component.html',
})

export class CounterParentComponent{
    @ViewChild(CounterChildComponent, {static: true}) 
    private counterchildcomponent: CounterChildComponent;
    increase() {
        this.counterchildcomponent.increaseByOne();
     }
     decrease() {
        this.counterchildcomponent.decreaseByOne();
     }
}