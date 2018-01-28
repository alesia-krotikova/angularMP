import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthorizationService} from '../authorization.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
    user: any = {};
    subscription: Subscription = new Subscription;

    constructor(private authorizationService: AuthorizationService) {}

    ngOnInit() {}

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    login(): void {
        if (this.user.name && this.user.password) {
            this.subscription = this.authorizationService.login(this.user.name, this.user.password)
                .subscribe(res => {
                    this.authorizationService.getUserInfo().subscribe();
                });
        }
    }
}
