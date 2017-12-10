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
    currentUserName: string;
    isLogin: boolean;

    constructor(private authorizationService: AuthorizationService) {
        this.logoPath = '/images/logo.png';
        this.logoText = 'Angular Courses';
        this.currentUserName = 'Alesia Krotikova';
    }

    ngOnInit() {
        this.isLogin = this.authorizationService.isAuthenticated();
    }

    logout() {
        this.authorizationService.logout();
    }
}