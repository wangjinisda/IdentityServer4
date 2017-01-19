import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginModuleService {

    private login: string = '/LoginAction/';

    private consent: string = '/ConsentAction/';

    private logout: string = '/LogoutAction/';

    constructor(private http: Http) { }

    loginExecute(data: any): Observable<Object> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.login, { data }, options);
    }

    consentExecute(data: any): Observable<Object> {
        return this.http.post(this.consent, data);
    }

    logoutExecute(data: any): Observable<Object> {
        return this.http.post(this.logout, data);
    }
    
}