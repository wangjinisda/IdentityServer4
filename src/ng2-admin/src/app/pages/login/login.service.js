"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var LoginModuleService = (function () {
    function LoginModuleService(http) {
        this.http = http;
        this.login = '/LoginAction/';
        this.consent = '/ConsentAction/';
        this.logout = '/LogoutAction/';
    }
    //https://www.dartdocs.org/documentation/angular2/2.0.0-beta.15/angular2.router/Location/replaceState.html
    LoginModuleService.prototype.loginExecute = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.login, data, options)
            .map(function (res) {
            return res.json();
        });
    };
    LoginModuleService.prototype.consentExecute = function (data) {
        return this.http.post(this.consent, data);
    };
    LoginModuleService.prototype.logoutExecute = function (data) {
        return this.http.post(this.logout, data);
    };
    return LoginModuleService;
}());
LoginModuleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginModuleService);
exports.LoginModuleService = LoginModuleService;
//# sourceMappingURL=login.service.js.map