import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs'
import {AuthorizationService} from '../authorization.service';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    authorized: boolean = false;
    subscription: Subscription = new Subscription;
    logoPath: string;
    logoText: string;
    userName: string;

    constructor(private authorizationService: AuthorizationService) {
        this.authorizationService.isLogin.subscribe(state => this.authorized = state.authorized);
        this.logoPath = '/images/logo.png';
        this.logoText = 'Angular Courses';
    }

    ngOnInit() {
        this.subscription = this.authorizationService.isLogin.subscribe(res => {
            if(res) {
                this.subscription = this.authorizationService.getUserInfo()
                    .subscribe(user => {
                        this.userName = user.name
                    });
            }

            return this.userName;
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    logout(): void {
        this.authorizationService.logout();
    }
}