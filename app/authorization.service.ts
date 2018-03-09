import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, Response} from '@angular/http';
import {RequestOptions} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from './user';
import {Store} from '@ngrx/store';

@Injectable()

export class AuthorizationService {
    baseURL: string;
    token: string;
    user: User;
    isLogin: Observable<any>;

    constructor(private http: Http, private store: Store<any>) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.token = currentUser && currentUser.token;
        this.baseURL = 'http://localhost:3004';
        this.user = new User();
        this.isLogin = store.select('login');
    }

    login(user: any): Observable<boolean> {
        return this.http.post(`${this.baseURL}/auth/login`, {login: user.name, password: user.password})
            .map((res: Response) => {
                let response = res.json(),
                    token = response.token;

                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({user: name, token: token}));
                    this.store.dispatch({type: 'login'});

                    return true;
                }
            });
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.token = null;
        this.store.dispatch({type: 'logout'});
    }

    getUserInfo(): Observable<User> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.token
        }),
            options = new RequestOptions({headers: headers});

        return this.http.post(`${this.baseURL}/auth/userinfo`, {}, options)
            .map(data => {
                let userData = data.json();

                if (userData) {
                    this.user.id = userData.id;
                    this.user.token = userData.fakeToken;
                    this.user.name = `${userData.name.first} ${userData.name.last}`;
                    this.user.login = userData.login;
                    this.user.password = userData.password;

                    return this.user;
                }
            });
    }
}