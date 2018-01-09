import {Component, OnInit} from '@angular/core';
import {Course} from '../course'
import {CourseService} from '../course.service'
import {FilterPipe} from '../filter.pipe';

@Component({
    selector: 'courses-page',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
    courses: Course[];

    constructor(private courseService: CourseService, private filter: FilterPipe) {}

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

    remove(course: Course): void {
        if (confirm('Do you really want to delete the course?')) {
            this.courses = this.courses.filter((item: Course) => item !== course);
            this.courseService.removeItem(course.id);
        }
    }
}
