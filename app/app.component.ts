import {Component, OnInit} from '@angular/core';
import {Course} from './course'
import {CourseService} from './course.service'

@Component({
    selector: 'courses-page',
    templateUrl: '/app/app.component.html',
    styleUrls: ['/app/app.component.css']
})

export class AppComponent {
    courses: Course[];

    constructor(private courseService: CourseService) {}

    getCourses(): void {
        this.courses = this.courseService.getList();
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
