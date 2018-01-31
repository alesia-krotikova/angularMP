import {Component, OnInit, OnDestroy} from '@angular/core';
import {Validators, FormBuilder, FormControl} from '@angular/forms';
import {AuthorizationService} from '../authorization.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription;
    loginForm: any;

    constructor(private authorizationService: AuthorizationService, private builder: FormBuilder) {}

    ngOnInit() {
        this.loginForm = this.builder.group({
            name: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    login(): void {
        this.subscription = this.authorizationService.login(this.loginForm.value).subscribe();
    }
}
