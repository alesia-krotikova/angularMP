import {Component, OnInit, OnDestroy} from '@angular/core';
import {Validators, FormBuilder, FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
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
    returnUrl: string;

    constructor(private authorizationService: AuthorizationService,
                private builder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.loginForm = this.builder.group({
            name: ['', Validators.required],
            password: ['', Validators.required]
        });

        console.log(this.route.snapshot.queryParams['returnUrl']);
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    login(): void {
        this.subscription = this.authorizationService.login(this.loginForm.value)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    alert('Unauthorized. Try again');
                }
        )
    }
}
