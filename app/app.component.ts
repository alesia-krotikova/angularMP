import {Component, OnInit} from '@angular/core';
import {Course} from './course'
import {CourseService} from './course.service'
import {AuthorizationService} from './authorization.service'

@Component({
    selector: 'courses-page',
    templateUrl: '/app/app.component.html',
    styleUrls: ['/app/app.component.css']
})

export class AppComponent {
    courses: Course[];

    constructor(private courseService: CourseService, private authorizationService: AuthorizationService) {}

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

    remove(id: number): void {
        if (confirm('Do you really want to delete the course?')) {
            this.courseService.removeItem(id);
        }
    }
}
