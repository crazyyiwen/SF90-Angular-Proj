import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';
import {EmployeeService} from './employee.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  constructor(private _employeeService: EmployeeService,
              private _router: Router,
              private _route: ActivatedRoute) { 
               this.employees = this._route.snapshot.data['employeeservice'];
              }

  ngOnInit() {
    
  }
  // onClick(employeeId: number){
  //   this._router.navigate(['/employees', employeeId]);
  // }
}
