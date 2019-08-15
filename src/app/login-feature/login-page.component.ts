import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'login-page',
    templateUrl: './login-feature.component.html',
    styleUrls:['./login-page.component.css']
})

export class LoginPageComponent{
    formgroup: FormGroup;
    constructor(private formBuilder: FormBuilder){

    }
    ngOnInit(){
        this.createForm();
    }
    createForm(){
        this.formgroup = this.formBuilder.group({
            'Email': ['', [Validators.required, Validators.email]],
            'Password': ['', Validators.required]
        });
    }
    getError(el){
        switch(el){
            case 'email':
                return this.formgroup.get('Email').hasError('required')?
                'You must enter a email': this.formgroup.get('Email')?
                'Not a valid email': '';
                break;
            case 'pass':
                if(this.formgroup.get('Password').hasError('required')){
                    return 'Password required !';
                }
                break;
            default:
                return '';
        }
    }
    onSubmit(post){

    }
}