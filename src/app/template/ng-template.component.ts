import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `      
                <ng-template #customTabButtons>
                    <div class="custom-class">
                        <button class="tab-button" (click)="login()">
                        {{loginText}}
                        </button>
                        <button class="tab-button" (click)="signup()">
                        {{signupText}}
                        </button>
                    </div>
                </ng-template>
                <tab-container [headerTemplate]="customTabButtons"></tab-container>      
                `
})
  export class NgTemplateComponent {
    loginText: string = "login";
    signupText: string = "signup";
    totalEstimate = 10;
    ctx = { estimate: this.totalEstimate };
    login() {

    }
    signup() {

    }
    
  }