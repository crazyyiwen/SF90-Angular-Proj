import { Component, OnInit } from '@angular/core';

// <ng-template #sample let-templateMessage="message">
//     {{templateMessage}}
//   </ng-template>
//   <app-template-test-child [childTemplate]="sample"><app-template-test-child>
@Component({
  selector: 'app-template-test',
  template: `
  
  <button (click)="changeText()" ion-button>{{text}}</button>
  `
  
})
export class TemplateTestComponent implements OnInit {
  public text: string = "hello";
  constructor() { }

  ngOnInit() {
    
  }
  changeText(): void{
    if(this.text === "hello"){
      this.text = "rank";
    }
    else{
      this.text = "hello";
    }
  }
}
