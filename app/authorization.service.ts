import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()

export class AuthorizationService {
    isLoginSubject: BehaviorSubject<boolean>;
    currentUser: any;

    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isLoginSubject = new BehaviorSubject(!!this.currentUser);
    }

    login(name: string, password: string): void {
        this.currentUser = {name, password};

        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.isLoginSubject.next(true);
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.isLoginSubject.next(false);
    }

    isAuthenticated(): Observable<boolean> {
        return this.isLoginSubject.asObservable();
    }

    GetUserInfo(): string {
        return this.currentUser.name;
    }
}