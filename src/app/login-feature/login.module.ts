import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {LoginPageComponent} from './login-page.component';
import { Routes, RouterModule } from '@angular/router';
import {MaterialModule} from '../material.module';
import {ReactiveFormComponent} from '../reactiveForm/reactiveform.component';
import {ControlMessages} from '../reactiveForm/control-message.component';
import {SuccessPageComponent} from '../reactiveForm/success-page.component';

const routes: Routes = [
    {path: '', component: LoginPageComponent},
    {path: 'reactiveform', component: ReactiveFormComponent},
    {path: 'successpage', component: SuccessPageComponent}
]
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MaterialModule
    ],
    declarations: [LoginPageComponent, ReactiveFormComponent, ControlMessages, SuccessPageComponent]
})

export class LoginModule{

}