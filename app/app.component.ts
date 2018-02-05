import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './authorization.service'
import {CourseService} from './course.service'
import {FilterPipe} from './filter.pipe';
import {Observable} from 'rxjs'

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FilterPipe]
})

export class AppComponent {
    constructor(private authorizationService: AuthorizationService, private courseService: CourseService) {}

    isLogin(): Observable<boolean> {
        return this.authorizationService.isAuthenticated();
    }
}
