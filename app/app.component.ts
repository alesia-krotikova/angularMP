import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './authorization.service'
import {FilterPipe} from './filter.pipe';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FilterPipe]
})

export class AppComponent {
    constructor(private authorizationService: AuthorizationService) {}

    isLogin(): boolean {
        return this.authorizationService.isAuthenticated();
    }
}
