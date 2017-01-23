"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var login_service_1 = require("./login.service");
var loginModel_1 = require("./models/loginModel");
var router_1 = require("@angular/router");
var Login = (function () {
    function Login(route, router, fb, service) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.submitted = false;
        this.loginModel = new loginModel_1.LoginModel();
        this.form = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.loginModel.Username = this.email.value;
        this.loginModel.Password = this.password.value;
        this.loginModel.RememberLogin = true;
        this.loginModel.ReturnUrl = '';
        route.queryParams.subscribe(function (val) {
            _this.loginModel.ReturnUrl = val['returnUrl'];
            console.log(val['returnUrl']);
            //console.log(router);
        });
    }
    Login.prototype.onSubmit = function (values) {
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            this.service.loginExecute(this.loginModel).subscribe(function (val) {
                console.log(val);
            });
        }
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: 'login',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./login.scss')],
        template: require('./login.html'),
        providers: [login_service_1.LoginModuleService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        forms_1.FormBuilder,
        login_service_1.LoginModuleService])
], Login);
exports.Login = Login;
//# sourceMappingURL=login.component.js.map