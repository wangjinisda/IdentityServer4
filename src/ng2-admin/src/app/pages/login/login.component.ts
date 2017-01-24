import {Component, ViewEncapsulation} from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { LoginModuleService } from './login.service';
import { LoginModel } from './models/loginModel';

import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
  providers: [LoginModuleService, Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted: boolean = false;
  private loginModel: LoginModel = new LoginModel();

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      fb: FormBuilder,
      private location: Location,
      private service: LoginModuleService) {

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.loginModel.RememberLogin = true;
    this.loginModel.ReturnUrl = '';

    route.queryParams.subscribe( (val: any) =>{
        this.loginModel.ReturnUrl = val['returnUrl'];
        console.log(val['returnUrl']);
        //console.log(router);
    });    
    
  }

  public onSubmit(values: Object): void {

    this.loginModel.Username = this.email.value;
    this.loginModel.Password = this.password.value;

    this.submitted = true;
    if (this.form.valid) {
        // your code goes here
        this.service.loginExecute(this.loginModel)
            .subscribe((val: LoginModel) => {
            console.log(val);
            window.location.href = val.ReturnUrl;
        });
    }
  }
}
