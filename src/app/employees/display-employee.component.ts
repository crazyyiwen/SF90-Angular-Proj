import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  viewEmployee(){
    this._router.navigate(['/employees', this.employee.id]);
  }
}
