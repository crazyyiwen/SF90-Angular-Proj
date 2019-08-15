import {Injectable} from '@angular/core';
import {Employee} from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EmployeeService{
    private listEmployees: Employee[] = [
        {
          id: 1,
          name: 'Mark',
          gender: 'Male',            
          contactPreference: 'Email',
          email: 'mark@pragimtech.com',
          dateOfBirth: new Date('10/25/1988'),
          department:'IT',
          isActive: true,
          photoPath: '/assets/images/p1.jpg'
        },
        {
          id: 2,
          name: 'Mary',
          gender: 'Female',            
          contactPreference: 'Phone',
          email: '2016284500',
          dateOfBirth: new Date('10/25/1978'),
          department:'HR',
          isActive: true,
          photoPath: '/assets/images/p2.jpg'
        },
        {
          id: 3,
          name: 'Vettel',
          gender: 'Male',            
          contactPreference: 'Email',
          email: 'Vettel@pragimtech.com',
          dateOfBirth: new Date('10/25/1987'),
          department:'IT',
          isActive: true,
          photoPath: '/assets/images/p3.jpg'
        }
    ];
    getEmployees(): Observable<Employee[]> {
      return Observable.of(this.listEmployees);
    }
    getEmployee(id: number): Employee {
      return this.listEmployees.find(e => e.id === id);
  }
    save(employee: Employee){
      this.listEmployees.push(employee);
    }
}