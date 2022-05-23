import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth-service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let currentUser = this.authenticationService.currentTokenValue;
        if (currentUser) {
            var expiryDate = new Date();
            expiryDate.setTime(currentUser.expiry * 1000);
            if (expiryDate < new Date(Date.now())) {
                this.authenticationService.logout();
                //return this.authenticationService.UpdateToken();
            }
            else {
                return true;
            }
        }
        this.router.navigate(['login']);
        return true;
    }
}
