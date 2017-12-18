import {Component, OnInit} from '@angular/core';
import {Course} from './course'
import {CourseService} from './course.service'
import {AuthorizationService} from './authorization.service'
import {FilterPipe} from 'filter.pipe';

@Component({
    selector: 'courses-page',
    templateUrl: '/app/app.component.html',
    styleUrls: ['/app/app.component.css'],
    providers: [FilterPipe]
})

export class AppComponent {
    courses: Course[];

    constructor(private courseService: CourseService, private authorizationService: AuthorizationService, private filter: FilterPipe) {}

    isLogin(): boolean {
        return this.authorizationService.isAuthenticated();
    }

    getCourses(): void {
        this.courses = this.courseService.getList();
    }

    isEmptyCoursesList(): boolean {
        return !this.courses.length;
    }

    ngOnInit() {
        this.getCourses();
    }

    find(str: string): void {
        this.getCourses();
        this.courses = this.filter.transform(this.courses, str);
    }

    remove(id: number): void {
        if (confirm('Do you really want to delete the course?')) {
            this.courseService.removeItem(id);
        }
    }
}
