import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthorizationService} from '../authorization.service';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class AuthGuard implements CanActivate {
    private authorized: boolean = false;

    constructor(private router: Router, private authorizationService: AuthorizationService) {
        this.authorizationService.isLogin.subscribe(state => this.authorized = state.authorized);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }

    isAuthenticated(){
        return this.authorized;
    }
}