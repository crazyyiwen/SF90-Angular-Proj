import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router'
@Component({
    selector: 'app-reactiveform',
    templateUrl: './reactiveform.component.html'
})

export class ReactiveFormComponent{
    userDetailsForm: any;
    account_validation_messages = {
        'name': [
          { type: 'required', message: 'Name is required' },
          { type: 'minlength', message: 'Username must be at least 5 characters long' },
          { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
          { type: 'pattern', message: 'Your username must contain only numbers and letters' },
          { type: 'validUsername', message: 'Your username has already been taken' }
        ],
        'email': [
          { type: 'required', message: 'Email is required' },
          { type: 'pattern', message: 'Enter a valid email' }
        ]
        }
    constructor(private formbuilder: FormBuilder, private router: Router){
        this.userDetailsForm = this.formbuilder.group({
            name: ['', [Validators.required, Validators.maxLength(10)]],
            email: ['', Validators.required]
        });    
    }

    onSubmitUserDetails() {
        if (this.userDetailsForm.dirty && this.userDetailsForm.valid) {
          alert(`Name: ${this.userDetailsForm.value.name} Email: ${this.userDetailsForm.value.email}`);
        }
        this.router.navigate(['./login', 'successpage']);
      }
}