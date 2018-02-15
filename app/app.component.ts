import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './authorization.service'
import {CourseService} from './course.service'
import {FilterPipe} from './filter.pipe';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FilterPipe]
})

export class AppComponent {
    private login: Observable<any>;
    private authorized: boolean = false;

    constructor(private authorizationService: AuthorizationService,
                private courseService: CourseService,
                private store: Store<any>) {
        this.login = store.select('login');
        this.login.subscribe(state => this.authorized = state.authorized);
    }

    isLogin(): boolean {
        return this.authorized;
    }
}
