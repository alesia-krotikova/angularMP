import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs'
import {AuthorizationService} from '../authorization.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    subscription: Subscription = new Subscription;
    logoPath: string;
    logoText: string;
    userName: string;

    constructor(private authorizationService: AuthorizationService) {
        this.logoPath = '/images/logo.png';
        this.logoText = 'Angular Courses';
    }

    ngOnInit() {
        this.subscription = this.authorizationService.getUserInfo()
            .subscribe(user => {
                this.userName = user.name
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    isLogin(): Observable<boolean> {
        return this.authorizationService.isAuthenticated();
    }

    logout(): void {
        this.authorizationService.logout();
    }
}