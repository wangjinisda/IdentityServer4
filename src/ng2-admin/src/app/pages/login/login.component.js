"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Login = (function () {
    function Login(fb) {
        this.submitted = false;
        this.form = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    Login.prototype.onSubmit = function (values) {
        this.submitted = true;
        if (this.form.valid) {
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
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], Login);
exports.Login = Login;
//# sourceMappingURL=login.component.js.map