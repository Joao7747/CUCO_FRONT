import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Token,DecodeToken } from '../models/token'
import { Result } from '../models/result';
import { Login } from '../models/login';

@Injectable({ providedIn: 'root' })
export class AuthService {

    public currentTokent: BehaviorSubject<any>;

    public get currentTokenValue(): Token {
        return this.currentTokent.value;
    }

    constructor(private http: HttpClient) {
        const token = localStorage.getItem('token');     
        this.currentTokent = new BehaviorSubject<any>(token);
    }

    // setTotken(token:string){

    //     // let decodeToken = new DecodeToken();
    //     // let fgToken = new Token();

    //     // fgToken.type="bearer";
    //     // fgToken.value= token;
    //     // decodeToken.token = fgToken;
    //     // fgToken.expiry = decodeToken.GetProperty("exp");
    //     // decodeToken.token = fgToken;
    //     // localStorage.setItem('token', JSON.stringify(fgToken));
    //     // this.currentTokent.next(fgToken);
    // }


    UpdateToken(){
        return true;
    }

    login(user: Login) {

        return this.http.post<Result<any>>(environment.api_url + 'login/autenticar/', user)
            .pipe(map(result => {

                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', result.content.token);
                this.currentTokent.next(result.content.token);
                window.location.replace('');
                return result.content.token;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }

}
