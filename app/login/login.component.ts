import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../authorization.service'

@Component({
    selector: 'login-page',
    templateUrl: '/app/login/login.component.html',
    styleUrls: ['/app/login/login.component.css']
})

export class LoginComponent {
    user: any = {};

    constructor(private authorizationService: AuthorizationService) {}

    ngOnInit() {}

    login(): void {
        if (this.user.name && this.user.password) {
            this.authorizationService.login(this.user.name, this.user.password);
            this.user = {};
        }
    }
}
