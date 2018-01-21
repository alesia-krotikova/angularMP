import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthorizationService} from '../authorization.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    logoPath: string;
    logoText: string;

    constructor(private authorizationService: AuthorizationService) {
        this.logoPath = '/images/logo.png';
        this.logoText = 'Angular Courses';
    }

    ngOnInit() {}

    isLogin(): Observable<boolean> {
        return this.authorizationService.isAuthenticated();
    }

    getCurrentUser(): string {
        return this.authorizationService.GetUserInfo();
    }

    logout(): void {
        this.authorizationService.logout();
    }
}