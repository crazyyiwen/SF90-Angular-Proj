import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-test-child',
  template: `<div *ngIf="value; else temp">
                Hello I am the template
              </div>
              <ng-template #temp>
                <ng-template *ngTemplateOutlet="childTemplate; context:ctx">
              <ng-template>`,
  styleUrls: ['./template-test-child.component.css']
})
export class TemplateTestChildComponent implements OnInit {
  value: boolean = false;
  ctx={message: 'Custome Message from child component'}
  @Input()
    childTemplate: TemplateRef<any>
  constructor() { }

  ngOnInit() {
  }

}
