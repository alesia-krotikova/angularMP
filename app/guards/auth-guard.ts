import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Injectable()

export class AuthGuard implements CanActivate {
    private login: Observable<any>;
    private authorized: boolean = false;

    constructor(private router: Router, private store: Store<any>) {
        this.login = store.select('login');
        this.login.subscribe(state => this.authorized = state.authorized);
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