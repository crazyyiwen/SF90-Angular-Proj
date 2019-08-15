import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {SelectRequiredValidatorDirective} from './shared/select-required-validator.directive';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';
import {EmployeeService} from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeListResolverService } from './employees/employee-list-service';
import { PageNotFoundComponent } from './employees/page-not-found.component';
import { EmployeeDetailGuardService } from './employees/employee-details-guard.service';
import {TestComponent} from './test/test.component'
import { HttpClientModule } from '@angular/common/http';
import { PersondataComponent } from './persondata/persondata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomAngularMaterialModule} from './angular.material.module';
import { TemplateTestComponent } from './template-test/template-test.component';
import { TemplateTestChildComponent } from './template-test-child/template-test-child.component';
import { TimerComponent } from './timer/timer.component';
import { SharedModule } from './Shared.module/shared.module';
import { CoreModule } from './Core/core.module';
import { CustomersRoutingModule } from './customer/customers-routing.module';
import { CounterParentComponent } from './counter/counter-parent.component';
import { CounterChildComponent } from './counter/counter-child.component';
import { NgTemplateComponent } from './template/ng-template.component';
import { ChildTemplateComponent } from './template/child-template.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    TestComponent,
    PersondataComponent,
    TemplateTestComponent,
    TemplateTestChildComponent,
    TimerComponent,
    CounterParentComponent,
    CounterChildComponent,
    NgTemplateComponent,
    ChildTemplateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    CustomAngularMaterialModule,
    SharedModule,
    CoreModule,
    CustomersRoutingModule,
    MaterialModule
  ],
  // providers: [EmployeeService, EmployeeListResolverService, EmployeeDetailGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
