import {Injectable} from '@angular/core';

@Injectable()

export class AuthorizationService {
    constructor() {}

    login(username: string, password: string): void {
        let user = {username, password};

        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user);
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        console.log('current user logged out');
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('currentUser');
    }

    GetUserInfo(): void {}
}