import {Component, Input, TemplateRef} from "@angular/core";

@Component({
    selector: 'tab-container',
    template: `
    
<ng-template #defaultTabButtons>
    
    <div class="default-tab-buttons">
        ...
    </div>
    
</ng-template>
<ng-container 
  *ngTemplateOutlet="headerTemplate ? headerTemplate: defaultTabButtons">
    
</ng-container>
... rest of tab container component ...
`})
export class ChildTemplateComponent {
    @Input()
    headerTemplate: TemplateRef<any>;
}