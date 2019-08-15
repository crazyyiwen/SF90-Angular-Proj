import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { EmployeeListResolverService } from './employees/employee-list-service';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { TestComponent } from './test/test.component';
import { PersondataComponent } from './persondata/persondata.component';
import { TemplateTestComponent } from './template-test/template-test.component';
import { TimerComponent } from './timer/timer.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeDetailGuardService } from './employees/employee-details-guard.service';
import { PageNotFoundComponent } from './employees/page-not-found.component';
import { EmployeeService } from './employees/employee.service';
import { CounterParentComponent } from './counter/counter-parent.component';
import { NgTemplateComponent } from './template/ng-template.component';

const appRoutes: Routes = [
  {path: 'login', 
   loadChildren: "./login-feature/login.module#LoginModule"
  },
  {path: 'list', 
   component: ListEmployeesComponent,
   resolve: {employeeservice: EmployeeListResolverService}
  },
  {path: 'create', 
   component: CreateEmployeeComponent
  },
  {path: 'test', 
   component: TestComponent
  },
  {path: 'persondata', 
   component: PersondataComponent
  },
  {path: 'templateTest', 
   component: TemplateTestComponent
  },
  {path: 'timer', 
   component: TimerComponent
  },
  //lazy loading
  {path: 'customer', 
   loadChildren: "./customer/customer.module#CustomerModule"
  // redirectTo: '/customers'
  },
  {path: 'counter', 
   component: CounterParentComponent
  },
  {path: 'ngtemplate', 
   component: NgTemplateComponent
  },
  {path: 'employees/:id', 
   component: EmployeeDetailsComponent,
   canActivate: [EmployeeDetailGuardService]
  },
  {path: '', 
   redirectTo: '/list', 
   pathMatch: 'full'
  },
  {path: 'notfound', 
   component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [EmployeeService, EmployeeListResolverService, EmployeeDetailGuardService],
})
export class AppRoutingModule { }
