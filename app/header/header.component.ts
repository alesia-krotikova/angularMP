import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../authorization.service";

@Component({
    selector: 'app-header',
    templateUrl: '/app/header/header.component.html',
    styleUrls: ['/app/header/header.component.css']
})

export class HeaderComponent implements OnInit {
    logoPath: string;
    logoText: string;

    constructor(private authorizationService: AuthorizationService) {
        this.logoPath = '/images/logo.png';
        this.logoText = 'Angular Courses';
    }

    ngOnInit() {}

    isLogin(): boolean {
        return this.authorizationService.isAuthenticated();
    }

    getCurrentUser(): string {
        return this.authorizationService.GetUserInfo();
    }

    logout(): void {
        this.authorizationService.logout();
    }
}