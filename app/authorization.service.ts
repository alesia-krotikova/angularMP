import {Injectable} from '@angular/core';

@Injectable()

export class AuthorizationService {
    currentUser: any;

    constructor() {}

    login(name: string, password: string): void {
        this.currentUser = {name, password};

        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        console.log(`current user ${this.currentUser}`);
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        console.log('current user logged out');
    }

    isAuthenticated(): boolean {
        return this.currentUser;
    }

    GetUserInfo(): string {
        return this.currentUser.name;
    }
}